const mongoose = require('mongoose');
require('dotenv').config();

class Database {
	constructor() {
		this.play();
	}
	async play() {
		try {
			await mongoose.connect(process.env.MONGODB_LOCAL,
				{
					useNewUrlParser: true,
					useUnifiedTopology: true,
					useFindAndModify: false
				}
			);
			console.log('koneksi sukses');
		} catch (error) {
			console.log(error);
		}
	}
}
module.exports = new Database();