const pgp = require('pg-promise')();
const config = require('../config/config');


const connectionDetails = config.development;

const db = pgp(connectionDetails);

module.exports = {db , pgp};
