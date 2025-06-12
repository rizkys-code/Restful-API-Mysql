const express = require('express')
const router = express.Router();
const {getAllMahasiswa, createDataMahasiswa} = require('../controller/mahasiswa.js')

router.get('/',getAllMahasiswa)
router.post('/',createDataMahasiswa)


module.exports=router