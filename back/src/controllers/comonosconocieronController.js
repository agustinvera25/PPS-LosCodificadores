const Comonosconocieron = require('../models/comonosconocieron');

const getComonosconocieron = async (req, res) => {
    try {
        const comonosconocieron = await Comonosconocieron.findAll();
        res.json(comonosconocieron);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getComonosconocieronById = async (req, res) => {
    const { id } = req.params;
    try {
        const comonosconocieron = await Comonosconocieron.findByPk(id);
        if (!comonosconocieron) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(comonosconocieron);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createComonosconocieron = async (req, res) => {
    const { id_huesped_dni, porMedioDe, descripcion } = req.body;
    try {
        const newComonosconocieron = await Comonosconocieron.create({ id_huesped_dni, porMedioDe, descripcion });
        res.status(201).json(newComonosconocieron);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateComonosconocieron = async (req, res) => {
    const { id } = req.params;
    const { id_huesped_dni, porMedioDe, descripcion } = req.body;
    try {
        const comonosconocieron = await Comonosconocieron.findByPk(id);
        if (!comonosconocieron) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await comonosconocieron.update({ id_huesped_dni, porMedioDe, descripcion });
        res.json({ message: 'Registro actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteComonosconocieron = async (req, res) => {
    const { id } = req.params;
    try {
        const comonosconocieron = await Comonosconocieron.findByPk(id);
        if (!comonosconocieron) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await comonosconocieron.destroy();
        res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getComonosconocieron,
    getComonosconocieronById,
    createComonosconocieron,
    updateComonosconocieron,
    deleteComonosconocieron
};
