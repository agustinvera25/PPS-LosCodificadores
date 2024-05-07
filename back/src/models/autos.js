const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// AUTOS
const Autos = sequelize.define('Autos', { // tabla
    // atributos
    patente: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false
    },
    id_huesped: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(40),
        allowNull: false
    }

}, {tableName: 'autos'})

module.exports = Autos;