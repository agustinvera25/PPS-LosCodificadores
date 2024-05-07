const Autos = require('../models/autos');

const getAutos = async (req, res) => {
    try {
        const autos = await Autos.findAll();
        res.json(autos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getAutoByPatente = async (req, res) => {
    const { patente } = req.params;
    try {
        const auto = await Autos.findByPk(patente);
        if (!auto) {
            return res.status(404).json({ message: 'Auto no encontrado' });
        }
        res.json(auto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createAuto = async (req, res) => {
    const { patente, id_huesped, marca, color } = req.body;
    try {
        const newAuto = await Autos.create({ patente, id_huesped, marca, color });
        res.status(201).json(newAuto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateAuto = async (req, res) => {
    const { patente } = req.params;
    const { id_huesped, marca, color } = req.body;
    try {
        const auto = await Autos.findByPk(patente);
        if (!auto) {
            return res.status(404).json({ message: 'Auto no encontrado' });
        }
        await auto.update({ id_huesped, marca, color });
        res.json({ message: 'Auto actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteAuto = async (req, res) => {
    const { patente } = req.params;
    try {
        const auto = await Autos.findByPk(patente);
        if (!auto) {
            return res.status(404).json({ message: 'Auto no encontrado' });
        }
        await auto.destroy();
        res.json({ message: 'Auto eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getAutos,
    getAutoByPatente,
    createAuto,
    updateAuto,
    deleteAuto
};
