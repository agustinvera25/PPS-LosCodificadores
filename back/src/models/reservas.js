const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// RESERVAS
const Reservas = sequelize.define('reservas', {
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
    fecha_llegada: {
        type: DataTypes.DATE,
    },
    fecha_salida: {
        type: DataTypes.DATE,
    },
    tipo_estadia: {
        type: DataTypes.STRING,
    },
    estado_pago: {
        type: DataTypes.STRING,
    },
    senia: {
        type: DataTypes.FLOAT
    },
    cantidad_huespedes: {
        type: DataTypes.INTEGER
    },
    cantidad_autos: {
        type: DataTypes.INTEGER
    }
}, {tableName: 'reservas'})

module.exports = Reservas;