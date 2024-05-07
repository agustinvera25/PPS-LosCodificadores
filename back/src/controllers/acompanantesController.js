const Acompanantes = require('../models/acompanantes');

const getAcompanantes = async (req, res) => {
    try {
        const acompanantes = await Acompanantes.findAll();
        res.json(acompanantes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getAcompananteById = async (req, res) => {
    const { id } = req.params;
    try {
        const acompanante = await Acompanantes.findByPk(id);
        if (!acompanante) {
            return res.status(404).json({ message: 'Acompanante no encontrado' });
        }
        res.json(acompanante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createAcompanante = async (req, res) => {
    const { id_huesped, nombre, apellido, edad, tel } = req.body;
    try {
        const newAcompanante = await Acompanantes.create({ id_huesped, nombre, apellido, edad, tel });
        res.status(201).json(newAcompanante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateAcompanante = async (req, res) => {
    const { id } = req.params;
    const { id_huesped, nombre, apellido, edad, tel } = req.body;
    try {
        const acompanante = await Acompanantes.findByPk(id);
        if (!acompanante) {
            return res.status(404).json({ message: 'Acompanante no encontrado' });
        }
        await acompanante.update({ id_huesped, nombre, apellido, edad, tel });
        res.json({ message: 'Acompanante actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteAcompanante = async (req, res) => {
    const { id } = req.params;
    try {
        const acompanante = await Acompanantes.findByPk(id);
        if (!acompanante) {
            return res.status(404).json({ message: 'Acompanante no encontrado' });
        }
        await acompanante.destroy();
        res.json({ message: 'Acompanante eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getAcompanantes,
    getAcompananteById,
    createAcompanante,
    updateAcompanante,
    deleteAcompanante
};