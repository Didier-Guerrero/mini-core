const express = require('express');
const supabase = require('./config/database');
const app = express();

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware para manejar JSON
app.use(express.json());

// Ruta principal para mostrar todos los gastos
app.get('/', async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;

    try {
        // Consulta inicial para obtener los gastos
        let gastosQuery = supabase
            .from('gastos')
            .select('id, fecha, descripcion, monto, empleado(nombre), departamento(nombre)');

        // Si se proporcionan fechas, filtrar los datos
        if (fechaInicio && fechaFin) {
            gastosQuery = gastosQuery.gte('fecha', fechaInicio).lte('fecha', fechaFin);
        }

        const { data: gastos, error: gastosError } = await gastosQuery;
        if (gastosError) {
            console.error('Error en consulta de gastos:', gastosError);
            throw gastosError;
        }

        // Calcular totales por departamento
        const { data: departamentos, error: departamentosError } = await supabase
            .from('departamento')
            .select('id, nombre');
        if (departamentosError) {
            console.error('Error al obtener departamentos:', departamentosError);
            throw departamentosError;
        }

        const totales = departamentos.map(departamento => {
            const total = gastos
                .filter(gasto => gasto.departamento.nombre === departamento.nombre)
                .reduce((acc, gasto) => acc + gasto.monto, 0);

            return {
                departamento: departamento.nombre,
                total
            };
        });

        res.render('index', { gastos: gastos || [], totales: totales || [] });
    } catch (err) {
        console.error('Error al cargar los datos:', err);
        res.status(500).send('Error al cargar los datos.');
    }
});


// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
