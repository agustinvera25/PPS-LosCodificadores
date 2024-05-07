const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// HUESPEDES
const Huespedes = sequelize.define('huespedes', { // tabla
    // atributos
    id_huesped_dni: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    telefono: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    domicilio: {
        type: DataTypes.JSON,
        allowNull: false
    },
    ocupacion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    auto: {
        type: DataTypes.BOOLEAN
    }

}, {tableName: 'huespedes'})

module.exports = { Huespedes };