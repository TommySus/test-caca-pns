const { Karyawan } = require('../models')


class KaryawanControllers {

    static showAllKaryawan (req, res) {
        // ini untuk memanggil semua data yg ada
        Karyawan.findAll()
        .then(data => {
            console.log(data)
            res.status(200).json(data)
        })
        .catch(error => {
            res.send(error)
        })
    }

    static makeNewKaryawan (req,res) {
        const obj = {
            Nama: req.body.Nama,
            Usia: req.body.Usia,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        // ini untuk membuat data baru
        Karyawan.create(obj)
        .then( data => {
            res.status(201).json({
                id: data.id,
                Nama: data.Nama,
                Usia: data.Usia,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            })
        })
        .catch(error => {
            res.send(error)
        })
    }

     // delete Karyawan 
    static deleteKaryawanById (req,res) {
        Karyawan.destroy({where: {id: req.params.id}})
        .then(data => {
            if (data) {
                res.status(200).json({message: 'Karyawan successfully deleted'})
            } else {
                res.send(`data karyawan dengan id ${req.params.id} tidak ada`)
            }
        })
        .catch(error => {
            res.send(error)
        })
    }    

    //update Karyawan 
    static updateKaryawanById (req,res) {
        console.log(req.params.id)
        const obj = {
            Nama: req.body.Nama,
            Usia: req.body.Usia
        }
        Karyawan.update(obj,{where: {id: req.params.id}})
        .then(data => {
            if (data) {
                return Karyawan.findOne({where: {id: req.params.id}})
                .then(data2 => {
                   res.status(200).json(data2)
                })
                .catch(error => {
                    res.send(error)
                })   
            } else {
                res.send(error)
            }
        })
        .catch(error => {
            res.send(error)
        })
    }
}

module.exports = KaryawanControllers