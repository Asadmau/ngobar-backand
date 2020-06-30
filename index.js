const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const koneksi = require('./koneksi/db').koneksi;
// const koneksi = require('./koneksi/db');
// require('dotenv').config();


//dasar penggunaan express
//deklarasi modul sebagai app, penamaan constanta bebas

const app = express();

koneksi;

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.get('/', (req, res, next) => {
	res.send('respons redy');
});
const mhs = require('./route/mahasiswa');
app.use('/mahasiswa', mhs);
app.listen(5000, () => console.log('app send sukses http://localhost:5000'));


