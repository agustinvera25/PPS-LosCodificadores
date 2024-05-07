const { Huespedes } = require('../models/huespedes');

const getHuespedes = async (req, res) => {
    try {
        const huespedes = await Huespedes.findAll();
        res.json(huespedes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getHuespedById = async (req, res) => {
    const { id_huesped_dni } = req.params;
    try {
        const huespede = await Huespedes.findByPk(id_huesped_dni);
        if (!huespede) {
            return res.status(404).json({ message: 'Huespede no encontrado' });
        }
        res.json(huespede);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createHuesped = async (req, res) => {
    const { id_huesped_dni, nombre, apellido, fecha_nacimiento, telefono, email, domicilio, ocupacion, auto } = req.body;
    try {
        const existingHuesped = await Huespedes.findByPk(id_huesped_dni);
        if (existingHuesped) {
            return res.status(400).json({ message: 'DNI existente, pruebe con otro' });
        }
        const newHuespede = await Huespedes.create({ id_huesped_dni, nombre, apellido, fecha_nacimiento, telefono, email, domicilio, ocupacion, auto });
        res.status(201).json(newHuespede);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateHuesped = async (req, res) => {
    const { id_huesped_dni } = req.params;
    const { nombre, apellido, fecha_nacimiento, telefono, email, domicilio, ocupacion, auto } = req.body;
    try {
        const huespede = await Huespedes.findByPk(id_huesped_dni);
        if (!huespede) {
            return res.status(404).json({ message: 'Huespede no encontrado' });
        }
        await huespede.update({ nombre, apellido, fecha_nacimiento, telefono, email, domicilio, ocupacion, auto });
        res.json({ message: 'Huespede actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteHuesped = async (req, res) => {
    const { id_huesped_dni } = req.params;
    try {
        const huespede = await Huespedes.findByPk(id_huesped_dni);
        if (!huespede) {
            return res.status(404).json({ message: 'Huespede no encontrado' });
        }
        await huespede.destroy();
        res.json({ message: 'Huespede eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getHuespedes,
    getHuespedById,
    createHuesped,
    updateHuesped,
    deleteHuesped
};
