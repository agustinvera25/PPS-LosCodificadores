const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// HOSTERIAS
const Hosterias = sequelize.define('hosterias', { // tabla
    // atributos
    id_habitacion: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: true
    },
    precio_1p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precio_2p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precio_3p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precio_4p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precio_5p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    capacidad: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {tableName: 'hosterias'})

module.exports = { Hosterias };