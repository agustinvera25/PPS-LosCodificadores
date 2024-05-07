const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// SERVICIOS_CONSUMOS
const Servicios_consumos = sequelize.define('servicios_consumos', { // tabla
    // atributos
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_huesped: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre_servicio_consumo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    monto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {tableName: 'servicios_consumos'})

module.exports = Servicios_consumos;