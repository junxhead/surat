const express = require('express');
const mongoose = require('mongoose');
const skRoutes = express.Router()

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });


let Surat = require('../model/surat_keluar.model');


skRoutes.route('/').get(function (req, res) {
    Surat.find(function (err, surat) {
        if (err) {
            console.log(err);
        } else {
            res.json(surat);
        }
    });
});

//get masih error

// skRoutes.route('/add').post(function (req, res) {
//     let Surat = new Surat(req.body);

//     Surat.save()
//         .then(Surat => {
//             res.status(200).json({ 'todo': 'todo added successfully' });
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

module.exports = skRoutes
