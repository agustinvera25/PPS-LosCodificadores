const Estadias = require('../models/estadias');

const getEstadias = async (req, res) => {
    try {
        const estadias = await Estadias.findAll();
        res.json(estadias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getEstadiaById = async (req, res) => {
    const { id } = req.params;
    try {
        const estadia = await Estadias.findByPk(id);
        if (!estadia) {
            return res.status(404).json({ message: 'Estadia no encontrada' });
        }
        res.json(estadia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createEstadia = async (req, res) => {
    const { id_reserva, checkin, id_huesped, tipo_estadia, estado_pago, cantidad_huespedes, checkout } = req.body;
    try {
        const newEstadia = await Estadias.create({ id_reserva, checkin, id_huesped, tipo_estadia, estado_pago, cantidad_huespedes, checkout });
        res.status(201).json(newEstadia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateEstadia = async (req, res) => {
    const { id } = req.params;
    const { id_reserva, checkin, id_huesped, tipo_estadia, estado_pago, cantidad_huespedes, checkout } = req.body;
    try {
        const estadia = await Estadias.findByPk(id);
        if (!estadia) {
            return res.status(404).json({ message: 'Estadia no encontrada' });
        }
        await estadia.update({ id_reserva, checkin, id_huesped, tipo_estadia, estado_pago, cantidad_huespedes, checkout });
        res.json({ message: 'Estadia actualizada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteEstadia = async (req, res) => {
    const { id } = req.params;
    try {
        const estadia = await Estadias.findByPk(id);
        if (!estadia) {
            return res.status(404).json({ message: 'Estadia no encontrada' });
        }
        await estadia.destroy();
        res.json({ message: 'Estadia eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getEstadias,
    getEstadiaById,
    createEstadia,
    updateEstadia,
    deleteEstadia
};
