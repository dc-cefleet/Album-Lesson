const pgp = require('pg-promise')();
const connect = require('./config');
const db = pgp(connect);
