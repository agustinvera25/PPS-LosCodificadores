const express = require('express');
const router = express.Router();
const huespedesController = require('../controllers/huespedesController');

router.get('/huespedes', huespedesController.getHuespedes);
router.get('/huespedes/:id_huesped_dni', huespedesController.getHuespedById);
router.post('/huespedes', huespedesController.createHuesped);
router.put('/huespedes/:id_huesped_dni', huespedesController.updateHuesped);
router.delete('/huespedes/:id_huesped_dni', huespedesController.deleteHuesped);

module.exports = router;
