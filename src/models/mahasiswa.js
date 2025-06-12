const dbPoll = require('../config/database');

const getAllMahasiswaData = () => {
    const SQLQuery = 'SELECT * FROM mahasiswa';

    return dbPoll.execute(SQLQuery);
};

module.exports = {getAllMahasiswaData}