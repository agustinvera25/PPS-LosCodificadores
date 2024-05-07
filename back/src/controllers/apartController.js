const Apart = require('../models/apart');

const getAparts = async (req, res) => {
    try {
        const aparts = await Apart.findAll();
        res.json(aparts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getApartById = async (req, res) => {
    const { id } = req.params;
    try {
        const apart = await Apart.findByPk(id);
        if (!apart) {
            return res.status(404).json({ message: 'Apart no encontrado' });
        }
        res.json(apart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createApart = async (req, res) => {
    const { id_apart, precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad } = req.body;
    try {
        const existingApart = await Apart.findByPk(id_apart);
        if (existingApart) {
            return res.status(400).json({ message: 'ID existente, pruebe con otro' });
        }
        const newApart = await Apart.create({ id_apart, precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad });
        res.status(201).json(newApart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateApart = async (req, res) => {
    const { id } = req.params;
    const { precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad } = req.body;
    try {
        const apart = await Apart.findByPk(id);
        if (!apart) {
            return res.status(404).json({ message: 'Apart no encontrado' });
        }
        await apart.update({ precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad });
        res.json({ message: 'Apart actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteApart = async (req, res) => {
    const { id } = req.params;
    try {
        const apart = await Apart.findByPk(id);
        if (!apart) {
            return res.status(404).json({ message: 'Apart no encontrado' });
        }
        await apart.destroy();
        res.json({ message: 'Apart eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getAparts,
    getApartById,
    createApart,
    updateApart,
    deleteApart
};
