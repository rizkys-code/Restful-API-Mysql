const mysql = require('mysql2/promise');

const dbPoll = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'data_mahasiswa',
});

module.exports = dbPoll;