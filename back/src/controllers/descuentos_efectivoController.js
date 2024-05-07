const Descuentos_efectivo = require('../models/descuentos_efectivo');

const getDescuentosEfectivo = async (req, res) => {
    try {
        const descuentos_efectivo = await Descuentos_efectivo.findAll();
        res.json(descuentos_efectivo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getDescuentosEfectivoByPorcentaje = async (req, res) => {
    const { porcentaje } = req.params;
    try {
        const descuento_efectivo = await Descuentos_efectivo.findByPk(porcentaje);
        if (!descuento_efectivo) {
            return res.status(404).json({ message: 'Descuento efectivo no encontrado' });
        }
        res.json(descuento_efectivo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createDescuentoEfectivo = async (req, res) => {
    const { porcentaje, id_pago } = req.body;
    try {
        const newDescuentoEfectivo = await Descuentos_efectivo.create({ porcentaje, id_pago });
        res.status(201).json(newDescuentoEfectivo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateDescuentoEfectivo = async (req, res) => {
    const { porcentaje } = req.params;
    const { id_pago } = req.body;
    try {
        const descuento_efectivo = await Descuentos_efectivo.findByPk(porcentaje);
        if (!descuento_efectivo) {
            return res.status(404).json({ message: 'Descuento efectivo no encontrado' });
        }
        await descuento_efectivo.update({ id_pago });
        res.json({ message: 'Descuento efectivo actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteDescuentoEfectivo = async (req, res) => {
    const { porcentaje } = req.params;
    try {
        const descuento_efectivo = await Descuentos_efectivo.findByPk(porcentaje);
        if (!descuento_efectivo) {
            return res.status(404).json({ message: 'Descuento efectivo no encontrado' });
        }
        await descuento_efectivo.destroy();
        res.json({ message: 'Descuento efectivo eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getDescuentosEfectivo,
    getDescuentosEfectivoByPorcentaje,
    createDescuentoEfectivo,
    updateDescuentoEfectivo,
    deleteDescuentoEfectivo
};
