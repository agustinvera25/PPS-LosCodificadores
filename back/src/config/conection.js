require('dotenv').config();

const { Sequelize } = require("sequelize");

const database = process.env.DATABASE_NAME;
const host = process.env.DATABASE_HOST;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: "postgres",
});

(async () => {
    try {
      await sequelize.sync();
      console.log("Tabla sincronizada correctamente");
    } catch (error) {
      console.error("Error al sincronizar la tabla:", error);
    }
})();

module.exports = {
    sequelize
};
