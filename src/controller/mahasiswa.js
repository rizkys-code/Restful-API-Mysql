const {getAllMahasiswaData, addMahasiswaData, modeldeleteDataMahasiswa, updateDataMahasiswaa} = require('../models/mahasiswa')

const getAllMahasiswa = async (req,res) => {
    try{
        const [data] = await getAllMahasiswaData();

        res.status(200).json({
            statusCode: 200,
            massagae: 'Success',
            result: data,
        });
    }catch (error){
        res.send({
            status: 500,
            massage: 'Failed Get Data',
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
            massage:'Success',
            result: body,
        })
        // catch itu buat nanganin masalah error setelah try berjalan jika di try ada masalah jadi tetep bisa jalan dan nunjukin pesan error nya apa 
    }catch (error){
        res.send({
            statusCode: 500,
            massage: 'Failed',
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
            message: 'Success Delete Data'
        })
    }catch (error){
        res.status(500).send({
            message:'Failed Delete Data',
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
            massage: 'Failed Update Data',
            error
        })
    }
}

module.exports = {getAllMahasiswa, createDataMahasiswa, deleteDataMahasiswa, updateDataMahasiswa}