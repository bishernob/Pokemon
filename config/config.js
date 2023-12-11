require('dotenv').config();
const path = require('path');
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    migrationStorageTableName: 'sequelize_meta',
    migrationStorageTableSchema: 'public',
    migrationsPath: path.join(__dirname, 'migrations'),
  },
};