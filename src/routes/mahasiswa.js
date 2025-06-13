const express = require('express')
const router = express.Router();
const {getAllMahasiswa, createDataMahasiswa, deleteDataMahasiswa, updateDataMahasiswa} = require('../controller/mahasiswa.js');

router.get('/',getAllMahasiswa)
router.post('/',createDataMahasiswa)
router.delete('/:id', deleteDataMahasiswa)
router.patch('/:id', updateDataMahasiswa)


module.exports=router