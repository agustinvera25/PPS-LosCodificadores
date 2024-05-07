// Rutas para el modelo Acompanantes

const express = require('express');
const router = express.Router();
const acompanantesController = require('../controllers/acompanantesController');

router.get('/acompanantes', acompanantesController.getAcompanantes);
router.get('/acompanantes/:id', acompanantesController.getAcompananteById);
router.post('/acompanantes', acompanantesController.createAcompanante);
router.put('/acompanantes/:id', acompanantesController.updateAcompanante);
router.delete('/acompanantes/:id', acompanantesController.deleteAcompanante);

module.exports = router;
