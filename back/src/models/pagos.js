const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// PAGOS
const Pagos = sequelize.define('pagos', { // tabla
    // atributos
    id_pago: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_estadia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_huesped: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado_pago: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    metodo_pago: {
        type: DataTypes.STRING,
        allowNull: true
    },
    

}, {tableName: 'pagos'})

module.exports = { Pagos };