const express = require('express');
const { filtrarGastosPorFecha } = require('../controllers/gastosController');
const router = express.Router();

router.get('/filtrar', (req, res) => {
    res.render('filtrar');
});

router.get('/filtrar/resultados', filtrarGastosPorFecha);

module.exports = router;
