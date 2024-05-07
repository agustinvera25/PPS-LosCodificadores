const { Pagos } = require('../models/pagos');

const getPagos = async (req, res) => {
    try {
        const pagos = await Pagos.findAll();
        res.json(pagos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getPagoById = async (req, res) => {
    const { id_pago } = req.params;
    try {
        const pago = await Pagos.findByPk(id_pago);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(pago);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createPago = async (req, res) => {
    const { id_estadia, id_huesped, fecha_pago, estado_pago, monto, metodo_pago } = req.body;
    try {
        const newPago = await Pagos.create({ id_estadia, id_huesped, fecha_pago, estado_pago, monto, metodo_pago });
        res.status(201).json(newPago);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updatePago = async (req, res) => {
    const { id_pago } = req.params;
    const { id_estadia, id_huesped, fecha_pago, estado_pago, monto, metodo_pago } = req.body;
    try {
        const pago = await Pagos.findByPk(id_pago);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        await pago.update({ id_estadia, id_huesped, fecha_pago, estado_pago, monto, metodo_pago });
        res.json({ message: 'Pago actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deletePago = async (req, res) => {
    const { id_pago } = req.params;
    try {
        const pago = await Pagos.findByPk(id_pago);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        await pago.destroy();
        res.json({ message: 'Pago eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getPagos,
    getPagoById,
    createPago,
    updatePago,
    deletePago
};
