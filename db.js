const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'test',
    user: 'what',
    password: '1234',

};
const db = pgp(cn);

module.exports = db;