const express = require('express');
const MHS = require('../models/mahasiswa');
const db = require('../koneksi/db');

//deklarasi constanta dengan nama route untuk pemanggilan module express router
const route = express.Router();

route.post('/', async (req, res) => {
	const {
		username,
		email,
		password,
		alamat,
		tgl_lahir,
		hoby
	} = req.body;
	let student = new MHS({
		username: username,
		email: email,
		password: password,
		alamat: alamat,
		tgl_lahir: tgl_lahir,
		hoby: hoby
	});
	try {
		await student.save().then(result => {
			res.send(result);
		})
	} catch (error) {
		res.send(error);
	}
});
route.get('/', async (req, res) => {
	// const uid = req.params.id;
	try {

		// await MHS.findById(uid).findOne().then(result => {
		// 	res.send(result);
		// })


		await MHS.find().then(result => {
			res.send(result);
		})
	} catch (error) {
		res.send(error);
	}
})

route.get('/:id', async (req, res) => {
	const uid = req.params.id;
	try {

		await MHS.findById(uid).findOne().then(result => {
			res.send(result);
		})


		// await MHS.find().then(result => {
		// 	res.send(result);
		// })
	} catch (error) {
		res.send(error);
	}
});

route.patch('/:id', async (req, res) => {
	const uid = req.params.id;
	const { username, email, password, alamat, tgl_lahir, hoby } = req.body;

	try {
		await MHS.findByIdAndUpdate({ _id: uid },
			{
				username: username,
				email: email,
				password: password,
				alamat: alamat,
				tgl_lahir: tgl_lahir,
				hoby: hoby
			}).then(result => {
				res.send(`sukses update ${result._id}`);
			})
	} catch (error) {
		res.send(error);
	}
})

route.delete('/:id', async (req, res) => {
	const uid = req.params.id;
	try {
		await MHS.findByIdAndDelete(uid).then(result => {
			res.send(`sukses delete ${result._id}`);
		})
	} catch (error) {
		res.send(error);
	}
})
module.exports = route;