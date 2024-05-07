const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController');

// Rutas para los autos
router.get('/autos', autosController.getAutos);
router.get('/autos/:patente', autosController.getAutoByPatente);
router.post('/autos', autosController.createAuto);
router.put('/autos/:patente', autosController.updateAuto);
router.delete('/autos/:patente', autosController.deleteAuto);

module.exports = router;