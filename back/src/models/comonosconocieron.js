const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// COMONOSCONOCIERON
const Comonosconocieron = sequelize.define('comonosconocieron', { // tabla
    // atributos
    id_info: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_huesped_dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    porMedioDe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {tableName: 'comonosconocieron'})

module.exports = Comonosconocieron;