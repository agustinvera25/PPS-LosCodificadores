const express = require('express');
const router = express.Router();
const estadiasController = require('../controllers/estadiasController');

router.get('/estadias', estadiasController.getEstadias);
router.get('/estadias/:id', estadiasController.getEstadiaById);
router.post('/estadias', estadiasController.createEstadia);
router.put('/estadias/:id', estadiasController.updateEstadia);
router.delete('/estadias/:id', estadiasController.deleteEstadia);

module.exports = router;
