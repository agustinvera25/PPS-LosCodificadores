const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// CABANIAS
const Cabanias = sequelize.define('Cabanias', { // tabla
    // atributos
    id_cabania: {
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
        allowNull: false
    },
    precio_6p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precio_7p: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {tableName: 'cabanias'})

module.exports = Cabanias;