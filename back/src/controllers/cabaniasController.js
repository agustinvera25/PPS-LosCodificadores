const Cabanias = require('../models/cabanias');

const getCabanias = async (req, res) => {
    try {
        const cabanias = await Cabanias.findAll();
        res.json(cabanias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getCabaniaById = async (req, res) => {
    const { id } = req.params;
    try {
        const cabania = await Cabanias.findByPk(id);
        if (!cabania) {
            return res.status(404).json({ message: 'Cabaña no encontrada' });
        }
        res.json(cabania);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createCabania = async (req, res) => {
    const { id_cabania, precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, precio_6p, precio_7p, capacidad } = req.body;
    try {
        const existingCabania = await Cabanias.findByPk(id_cabania);
        if (existingCabania) {
            return res.status(400).json({ message: 'ID existente, pruebe con otro' });
        }
        const newCabania = await Cabanias.create({ id_cabania, precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, precio_6p, precio_7p, capacidad });
        res.status(201).json(newCabania);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateCabania = async (req, res) => {
    const { id } = req.params;
    const { precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, precio_6p, precio_7p, capacidad } = req.body;
    try {
        const cabania = await Cabanias.findByPk(id);
        if (!cabania) {
            return res.status(404).json({ message: 'Cabaña no encontrada' });
        }
        await cabania.update({ precio_1p, precio_2p, precio_3p, precio_4p, precio_5p, precio_6p, precio_7p, capacidad });
        res.json({ message: 'Cabaña actualizada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteCabania = async (req, res) => {
    const { id } = req.params;
    try {
        const cabania = await Cabanias.findByPk(id);
        if (!cabania) {
            return res.status(404).json({ message: 'Cabaña no encontrada' });
        }
        await cabania.destroy();
        res.json({ message: 'Cabaña eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getCabanias,
    getCabaniaById,
    createCabania,
    updateCabania,
    deleteCabania
};
