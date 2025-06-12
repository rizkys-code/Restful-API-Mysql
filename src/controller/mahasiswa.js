const {getAllMahasiswaData, addMahasiswaData} = require('../models/mahasiswa')

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

const createDataMahasiswa = async (req,res) =>{
    const {body} = req;
    try{
        await addMahasiswaData(body)

        res.json({
            statusCode:200,
            massage:'Berhasil Mengirim Data',
            result: body,
        })
    }catch (error){
        res.send({
            statusCode: 500,
            massage: 'Gagal ngirim data',
            error,
        })
    }
}

module.exports = {getAllMahasiswa, createDataMahasiswa}