const knex = require('knex');

const config = require('../knexfile');

const environment = process.env.NODE_ENV || "development";

module.exports = knex(config[environment]);

// const db = knex(
//     process.env.NODE_ENV === 'production'
//     ? config.production
//     : config.development
// );

// module.exports = db;
