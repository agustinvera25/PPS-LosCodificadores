const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// CAMPINGS
const Campings = sequelize.define('Campings', { // tabla
    // atributos
    id_modalidad_acampe: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    precio_modalidad_acampe: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_acampe_adulto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_acampe_niños: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_picnic_adulto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_picnic_niños: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {tableName: 'campings'})

module.exports = Campings;