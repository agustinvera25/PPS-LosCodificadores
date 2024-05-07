const { Servicios_consumos } = require('../models/servicios_consumos');

const getServiciosConsumos = async (req, res) => {
    try {
        const serviciosConsumos = await Servicios_consumos.findAll();
        res.json(serviciosConsumos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getServicioConsumoById = async (req, res) => {
    const { id_servicio_consumo } = req.params;
    try {
        const servicioConsumo = await Servicios_consumos.findByPk(id_servicio_consumo);
        if (!servicioConsumo) {
            return res.status(404).json({ message: 'Servicio o consumo no encontrado' });
        }
        res.json(servicioConsumo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createServicioConsumo = async (req, res) => {
    const { id_huesped, nombre_servicio_consumo, fecha, monto } = req.body;
    try {
        const newServicioConsumo = await Servicios_consumos.create({ id_huesped, nombre_servicio_consumo, fecha, monto });
        res.status(201).json(newServicioConsumo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateServicioConsumo = async (req, res) => {
    const { id_servicio_consumo } = req.params;
    const { id_huesped, nombre_servicio_consumo, fecha, monto } = req.body;
    try {
        const servicioConsumo = await Servicios_consumos.findByPk(id_servicio_consumo);
        if (!servicioConsumo) {
            return res.status(404).json({ message: 'Servicio o consumo no encontrado' });
        }
        await servicioConsumo.update({ id_huesped, nombre_servicio_consumo, fecha, monto });
        res.json({ message: 'Servicio o consumo actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteServicioConsumo = async (req, res) => {
    const { id_servicio_consumo } = req.params;
    try {
        const servicioConsumo = await Servicios_consumos.findByPk(id_servicio_consumo);
        if (!servicioConsumo) {
            return res.status(404).json({ message: 'Servicio o consumo no encontrado' });
        }
        await servicioConsumo.destroy();
        res.json({ message: 'Servicio o consumo eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getServiciosConsumos,
    getServicioConsumoById,
    createServicioConsumo,
    updateServicioConsumo,
    deleteServicioConsumo
};
