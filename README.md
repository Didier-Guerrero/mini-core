# Mini-Core Sistema de Gestión de Gastos

Este proyecto es una aplicación web desarrollada con Node.js que permite a los usuarios gestionar gastos de manera eficiente. Los usuarios pueden visualizar los gastos registrados, filtrar por rangos de fechas, y calcular totales por departamento. También cuenta con un botón para limpiar los filtros.

---

## 🚀 Funcionalidades

- **Visualización de gastos:** Muestra una tabla con todos los gastos registrados.
- **Filtrado por rango de fechas:** Permite al usuario seleccionar un rango de fechas para mostrar los gastos correspondientes.
- **Cálculo de totales:** Calcula y muestra el total de los gastos agrupados por departamento según el rango seleccionado.
- **Limpiar filtro:** Botón para restablecer los datos a la vista inicial sin filtros.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para el backend.
- **Express**: Framework para la creación de servidores web.
- **EJS**: Motor de plantillas para renderizar vistas dinámicas.
- **Supabase**: Backend para la gestión de la base de datos.
- **HTML/CSS**: Para el diseño de las vistas.

---

## 📂 Estructura del Proyecto

```plaintext
mini-core/
│
├── app.js                # Archivo principal con la lógica del servidor
├── config/
│   └── database.js       # Configuración del cliente Supabase
├── views/
│   ├── index.ejs         # Vista principal con tablas y filtros
├── node_modules/         # Dependencias instaladas
├── package.json          # Archivo de configuración del proyecto
└── README.md             # Este archivo
```
⚙️ Instalación y Configuración
1. Clona el repositorio

```bash
git clone https://github.com/Didier-Guerrero/mini-core.git
cd mini-core
```
2. Instala las dependencias
```bash
npm install
```

3. Configura las variables de entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
```plaintext
SUPABASE_URL=https://<TU_SUPABASE_URL>
SUPABASE_KEY=<TU_SUPABASE_KEY>
Obtén estos valores desde tu proyecto en Supabase.
```

4. Configura la base de datos
Ejecuta las siguientes consultas en Supabase para crear las tablas necesarias:

```sql
CREATE TABLE empleado (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE departamento (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE gastos (
    id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    empleado_id INT REFERENCES empleado(id),
    departamento_id INT REFERENCES departamento(id)
);
```
5. Inserta datos de prueba
```sql
INSERT INTO empleado (nombre) VALUES 
('Zoila Baca'), 
('Aquiles C'), 
('Johnny Melas');

INSERT INTO departamento (nombre) VALUES 
('IT'), 
('Desarrollo'), 
('Diseño'), 
('Marketing');

INSERT INTO gastos (fecha, descripcion, monto, empleado_id, departamento_id) VALUES 
('2024-12-05', 'Compra de teclado', 80, 2, 1),
('2024-12-10', 'Capacitación en diseño', 120, 3, 3),
('2024-12-15', 'Publicidad en redes sociales', 300, 3, 4),
('2024-10-20', 'Soporte técnico', 150, 1, 1),
('2024-10-25', 'Implementación de software', 400, 2, 2);
```
6. Inicia el servidor
```bash
node app.js
```
7. Accede a la aplicación
Abre tu navegador y visita http://localhost:3000.

📋 Uso de la Aplicación
Visualización de gastos
Al acceder a la página principal, verás una tabla con todos los gastos registrados en la base de datos.

Filtrar por rango de fechas
Selecciona una fecha de inicio y una fecha de fin en el formulario.
Haz clic en el botón "Filtrar".
La tabla principal mostrará únicamente los gastos registrados en ese rango de fechas.
Calcular totales por departamento
Debajo de la tabla principal, verás una tabla con los totales agrupados por departamento según el rango de fechas filtrado.

Limpiar filtros
Haz clic en el botón "Limpiar Filtro" para volver a mostrar todos los datos sin aplicar ningún filtro.

🔧 Comandos Útiles
Instalar dependencias:

```bash
npm install
```
Iniciar el servidor:

```bash
node app.js
```

Contacto\
Autor: Didier Guerrero\
Correo\
didierguerrerosoft@gmail.com\
didier.guerrero@udla.edu.ec
