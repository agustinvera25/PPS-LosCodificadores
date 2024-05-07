const express = require('express');
const router = express.Router();
const serviciosConsumosController = require('../controllers/servicios_consumosController');

router.get('/servicios_consumos', serviciosConsumosController.getServiciosConsumos);
router.get('/servicios_consumos/:id_servicio_consumo', serviciosConsumosController.getServicioConsumoById);
router.post('/servicios_consumos', serviciosConsumosController.createServicioConsumo);
router.put('/servicios_consumos/:id_servicio_consumo', serviciosConsumosController.updateServicioConsumo);
router.delete('/servicios_consumos/:id_servicio_consumo', serviciosConsumosController.deleteServicioConsumo);

module.exports = router;
