const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conection')

// DESCUENTOS_EFECTIVO
const Descuentos_efectivo = sequelize.define('descuentos_efectivo', { // tabla
    // atributos
    porcentaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_pago: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {tableName: 'descuentos_efectivo'})

module.exports = Descuentos_efectivo;