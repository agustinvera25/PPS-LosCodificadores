const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// ESTADIAS
const Estadias = sequelize.define('estadias', { // tabla
    // atributos
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_reserva: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    checkin: {
        type: DataTypes.DATE,
        primaryKey: true,
        allowNull: false
    },
    id_huesped: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_estadia: {
        type: DataTypes.STRING,
    },
    estado_pago: {
        type: DataTypes.STRING,
    },
    cantidad_huespedes: {
        type: DataTypes.INTEGER
    },
    checkout: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {tableName: 'estadias'})

module.exports = Estadias;

