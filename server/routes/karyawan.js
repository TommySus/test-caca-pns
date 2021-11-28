const express = require('express')
const router = express.Router()

const KaryawanControllers = require('../controllers/karyawanController')

// router yg masuk ke sini adalah localhost:3000/karyawan/.....

router.get("/", KaryawanControllers.showAllKaryawan)
router.post("/create", KaryawanControllers.makeNewKaryawan)
router.delete("/delete/:id", KaryawanControllers.deleteKaryawanById)
router.put("/update/:id", KaryawanControllers.updateKaryawanById)


module.exports = router