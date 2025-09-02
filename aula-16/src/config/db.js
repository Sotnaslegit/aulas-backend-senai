const mysql = require('mysql2/promise') //importando o modulo mysql2 com suporte a promise

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "back_end"
});

//exportando modulo
module.exports = db;