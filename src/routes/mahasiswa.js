const express = require('express')
const router = express.Router();
const {getAllMahasiswa} = require('../controller/mahasiswa.js')

router.get('/',getAllMahasiswa)

module.exports=router