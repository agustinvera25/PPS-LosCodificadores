const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// APART
const Apart = sequelize.define('Apart', { // tabla
    // atributos
    id_apart: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    precio_1p: {
        type: DataTypes.FLOAT,
        allowNconstull: false
    },
    precio_2p: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_3p: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_4p: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_5p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    capacidad: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }

}, {tableName: 'apart'})


module.exports = Apart;