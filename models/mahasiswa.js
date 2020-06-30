const mongose = require('mongoose');
const route = require('../route/mahasiswa');
const schema = mongose.Schema;

const mahasiswa = new schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	alamat: {
		type: String
	},
	tgl_lahir: {
		type: String
	},
	hoby: {
		type: Array,
		"default": []
	}
},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
);

const mhs = require('../route/mahasiswa');
module.exports = mongose.model('student', mahasiswa);