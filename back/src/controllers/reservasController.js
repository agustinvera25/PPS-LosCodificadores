const { Reservas } = require('../models/reservas');

const getReservas = async (req, res) => {
    try {
        const reservas = await Reservas.findAll();
        res.json(reservas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getReservaById = async (req, res) => {
    const { id_reserva } = req.params;
    try {
        const reserva = await Reservas.findByPk(id_reserva);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        res.json(reserva);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createReserva = async (req, res) => {
    const { id_huesped, fecha_llegada, fecha_salida, tipo_estadia, estado_pago, senia, cantidad_huespedes, cantidad_autos } = req.body;
    try {
        const newReserva = await Reservas.create({ id_huesped, fecha_llegada, fecha_salida, tipo_estadia, estado_pago, senia, cantidad_huespedes, cantidad_autos });
        res.status(201).json(newReserva);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateReserva = async (req, res) => {
    const { id_reserva } = req.params;
    const { id_huesped, fecha_llegada, fecha_salida, tipo_estadia, estado_pago, senia, cantidad_huespedes, cantidad_autos } = req.body;
    try {
        const reserva = await Reservas.findByPk(id_reserva);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        await reserva.update({ id_huesped, fecha_llegada, fecha_salida, tipo_estadia, estado_pago, senia, cantidad_huespedes, cantidad_autos });
        res.json({ message: 'Reserva actualizada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteReserva = async (req, res) => {
    const { id_reserva } = req.params;
    try {
        const reserva = await Reservas.findByPk(id_reserva);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        await reserva.destroy();
        res.json({ message: 'Reserva eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva
};
