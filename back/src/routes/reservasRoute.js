const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

router.get('/reservas', reservasController.getReservas);
router.get('/reservas/:id_reserva', reservasController.getReservaById);
router.post('/reservas', reservasController.createReserva);
router.put('/reservas/:id_reserva', reservasController.updateReserva);
router.delete('/reservas/:id_reserva', reservasController.deleteReserva);

module.exports = router;
