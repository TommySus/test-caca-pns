const express = require('express')
const router = express.Router()

// code ini tergantung dari isi tabel/file yg ada
const karyawan = require('./karyawan') 

// ini adalah routing untuk tiap tabel 
router.use("/karyawan", karyawan)


module.exports = router