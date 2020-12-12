const knex = require('knex');

const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexConfig[environment]);

// const db = knex(
//     process.env.NODE_ENV === 'production'
//     ? knexConfig.production
//     : knexConfig.development
// );

// module.exports = db;
