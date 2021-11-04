// DB CONN
const Sequelize = require("sequelize");
const db = new Sequelize("casier_api", "root", "Harbang@79", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = db;
