const { Hosterias } = require('../models/hosterias');

const getHosterias = async (req, res) => {
    try {
        const hosterias = await Hosterias.findAll();
        res.json(hosterias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getHosteriaById = async (req, res) => {
    const { id_habitacion } = req.params;
    console.log(req.params);
    try {
        const hosteria = await Hosterias.findByPk(id_habitacion);
        if (!hosteria) {
            return res.status(404).json({ message: 'Hosteria no encontrada' });
        }
        res.json(hosteria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createHosteria = async (req, res) => {
    const { id_habitacion, precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad } = req.body;
    try {
        const existingHosteria = await Hosterias.findByPk(id_habitacion);
        if (existingHosteria) {
            return res.status(400).json({ message: 'ID existente, pruebe con otro' });
        }

        const newHosteria = await Hosterias.create({ id_habitacion, precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad });
        res.status(201).json(newHosteria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


const updateHosteria = async (req, res) => {
    const { id_habitacion } = req.params;
    const { precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad } = req.body;
    try {
        const hosteria = await Hosterias.findByPk(id_habitacion);
        if (!hosteria) {
            return res.status(404).json({ message: 'Hosteria no encontrada' });
        }
        await hosteria.update({ precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, capacidad });
        res.json({ message: 'Hosteria actualizada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteHosteria = async (req, res) => {
    const { id_habitacion } = req.params;
    try {
        const hosteria = await Hosterias.findByPk(id_habitacion);
        if (!hosteria) {
            return res.status(404).json({ message: 'Hosteria no encontrada' });
        }
        await hosteria.destroy();
        res.json({ message: 'Hosteria eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getHosterias,
    getHosteriaById,
    createHosteria,
    updateHosteria,
    deleteHosteria
};
