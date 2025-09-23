import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    database: 'back_end'
});

module.exports = db;