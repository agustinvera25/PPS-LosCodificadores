const Campings = require('../models/campings');

const getCampings = async (req, res) => {
    try {
        const campings = await Campings.findAll();
        res.json(campings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getCampingById = async (req, res) => {
    const { id } = req.params;
    try {
        const camping = await Campings.findByPk(id);
        if (!camping) {
            return res.status(404).json({ message: 'Camping no encontrado' });
        }
        res.json(camping);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createCamping = async (req, res) => {
    const { id_modalidad_acampe, precio_modalidad_acampe, precio_acampe_adulto, precio_acampe_niños, precio_picnic_adulto, precio_picnic_niños } = req.body;
    try {
        const existingCamping = await Campings.findByPk(id_modalidad_acampe);
        if (existingCamping) {
            return res.status(400).json({ message: 'ID existente, pruebe con otro' });
        }
        const newCamping = await Campings.create({ id_modalidad_acampe, precio_modalidad_acampe, precio_acampe_adulto, precio_acampe_niños, precio_picnic_adulto, precio_picnic_niños });
        res.status(201).json(newCamping);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateCamping = async (req, res) => {
    const { id } = req.params;
    const { precio_modalidad_acampe, precio_acampe_adulto, precio_acampe_niños, precio_picnic_adulto, precio_picnic_niños } = req.body;
    try {
        const camping = await Campings.findByPk(id);
        if (!camping) {
            return res.status(404).json({ message: 'Camping no encontrado' });
        }
        await camping.update({ precio_modalidad_acampe, precio_acampe_adulto, precio_acampe_niños, precio_picnic_adulto, precio_picnic_niños });
        res.json({ message: 'Camping actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteCamping = async (req, res) => {
    const { id } = req.params;
    try {
        const camping = await Campings.findByPk(id);
        if (!camping) {
            return res.status(404).json({ message: 'Camping no encontrado' });
        }
        await camping.destroy();
        res.json({ message: 'Camping eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getCampings,
    getCampingById,
    createCamping,
    updateCamping,
    deleteCamping
};

