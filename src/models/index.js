const config = require("../../config/config.js");

const Sequelize = require("sequelize");

const {database , username , password , host , dialect} = config.development
const sequelize = new Sequelize(database, username, password, 
  {
    host,
    dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pokemon = require("./pokemon.js")(sequelize, Sequelize);

module.exports = db;