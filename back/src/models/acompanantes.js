const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')


// ACOMPAÑANTES
const Acompanantes = sequelize.define('Acompanantes', {
    id_acompanante: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_huesped: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    edad: {
        type: DataTypes.INTEGER
    },
    tel: {
        type: DataTypes.INTEGER
    }    
}, {tableName: 'acompanantes'})

module.exports = Acompanantes;