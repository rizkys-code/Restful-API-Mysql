const {getAllMahasiswaData} = require('../models/mahasiswa')

const getAllMahasiswa = async (req,res) => {
    try{
        const [data] = await getAllMahasiswaData();

        res.status(200).json({
            status: 'success bro :)',
            massagaeL: 'Data Mahasiswa berhasil di ambil',
            result: data,
        });
    }catch (error){
        res.send({
            status: 'yah gagal :(',
            massage: 'gagal ngambil data bro',
            error,
        })
    }
}

module.exports = {getAllMahasiswa}