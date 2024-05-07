const express = require('express');
const router = express.Router();
const descuentosEfectivoController = require('../controllers/descuentos_efectivoController');

router.get('/descuentos_efectivo', descuentosEfectivoController.getDescuentosEfectivo);
router.get('/descuentos_efectivo/:porcentaje', descuentosEfectivoController.getDescuentosEfectivoByPorcentaje);
router.post('/descuentos_efectivo', descuentosEfectivoController.createDescuentoEfectivo);
router.put('/descuentos_efectivo/:porcentaje', descuentosEfectivoController.updateDescuentoEfectivo);
router.delete('/descuentos_efectivo/:porcentaje', descuentosEfectivoController.deleteDescuentoEfectivo);

module.exports = router;
