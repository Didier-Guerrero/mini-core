const Gastos = require('../models/gastos');

const filtrarGastosPorFecha = async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;

    if (!fechaInicio || !fechaFin) {
        return res.status(400).json({ error: 'Debe proporcionar fechaInicio y fechaFin' });
    }

    try {
        const gastos = await Gastos.getGastosByDateRange(fechaInicio, fechaFin);
        const totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);

        res.json({ gastos, totalGastos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al filtrar los gastos' });
    }
};

module.exports = { filtrarGastosPorFecha };
