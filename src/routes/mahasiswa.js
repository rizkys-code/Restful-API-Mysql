const express = require('express')
const router = express.Router();
const {getAllMahasiswa, createDataMahasiswa, deleteDataMahasiswa} = require('../controller/mahasiswa.js')

router.get('/',getAllMahasiswa)
router.post('/',createDataMahasiswa)
router.delete('/:id', deleteDataMahasiswa)


module.exports=router