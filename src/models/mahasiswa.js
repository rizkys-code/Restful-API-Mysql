const dbPoll = require('../config/database');

const getAllMahasiswaData = () => {
    const SQLQuery = 'SELECT * FROM mahasiswa';

    return dbPoll.execute(SQLQuery);
};

const addMahasiswaData = (body) => {
    const {nim, nama, no_telfon, alamat} = body;

    const SQLQuery = `INSERT INTO mahasiswa (nim, nama, no_telfon, alamat)
                        VALUES('${nim}', '${nama}', '${no_telfon}', '${alamat}')`
        
                        return dbPoll.execute(SQLQuery);
}

const modeldeleteDataMahasiswa = (idmahasiswa) => {
    const SQLQuery = `DELETE FROM mahasiswa WHERE id = ${idmahasiswa}` 
            return dbPoll.execute(SQLQuery)
            
}

const updateDataMahasiswaa = (body, idmahasiswa) => {
    const {nim, nama, no_telfon, alamat} = body
    const SQLQuery = `UPDATE mahasiswa SET nim='${nim}', nama='${nama}', no_telfon='${no_telfon}', alamat='${alamat}' WHERE id=${idmahasiswa}`;
            return dbPoll.execute(SQLQuery) 
}

module.exports = {getAllMahasiswaData, addMahasiswaData, modeldeleteDataMahasiswa, updateDataMahasiswaa}