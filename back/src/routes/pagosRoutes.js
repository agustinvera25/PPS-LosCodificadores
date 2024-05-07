const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController');

router.get('/pagos', pagosController.getPagos);
router.get('/pagos/:id_pago', pagosController.getPagoById);
router.post('/pagos', pagosController.createPago);
router.put('/pagos/:id_pago', pagosController.updatePago);
router.delete('/pagos/:id_pago', pagosController.deletePago);

module.exports = router;
