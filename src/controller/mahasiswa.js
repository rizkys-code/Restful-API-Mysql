const {getAllMahasiswaData, addMahasiswaData, modeldeleteDataMahasiswa, updateDataMahasiswaa} = require('../models/mahasiswa')

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
        // catch itu buat nanganin masalah error setelah try berjalan jika di try ada masalah jadi tetep bisa jalan dan nunjukin pesan error nya apa 
    }catch (error){
        res.send({
            statusCode: 500,
            massage: 'Gagal ngirim data',
            error,
        })  
    }
}


const deleteDataMahasiswa = async (req,res) =>{
    const idmahasiswa = req.params.id
    console.log(idmahasiswa)
    try{
        await modeldeleteDataMahasiswa(idmahasiswa);
        res.status(200).send({
            message: 'Data berhasil di hapus'
        })
    }catch (error){
        res.status(500).send({
            message:'Data gagal di hapus',
            error,
        })
    }
} 


const updateDataMahasiswa = async (req,res) =>{
    
    try{
        const id = req.params.id
        await updateDataMahasiswaa(req.body, req.params.id)
        res.status(200).send({
            statuscode: 200,
            message: 'success',
            result: {
                id,  // Mengambil id dari URL parameter
                ...req.body  // Mengambil semua data dari req.body dan menambahkannya ke objek baru
            }
        })
    }catch (error){
        res.status(500).send ({
            massage: 'Gagal update data',
            error
        })
    }
}

module.exports = {getAllMahasiswa, createDataMahasiswa, deleteDataMahasiswa, updateDataMahasiswa}