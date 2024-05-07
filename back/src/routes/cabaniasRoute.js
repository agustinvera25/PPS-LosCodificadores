const express = require('express');
const router = express.Router();
const cabaniasController = require('../controllers/cabaniasController');

// Rutas para cabañas
router.get('/cabanias', cabaniasController.getCabanias);
router.get('/cabanias/:id', cabaniasController.getCabaniaById);
router.post('/cabanias', cabaniasController.createCabania);
router.put('/cabanias/:id', cabaniasController.updateCabania);
router.delete('/cabanias/:id', cabaniasController.deleteCabania);

module.exports = router;

