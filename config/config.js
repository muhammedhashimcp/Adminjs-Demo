const mongoose = require('mongoose');
// const {MONGO_URL} = require("./config");
// const MONGO_URL =process.env.MONGO_URL
const MONGO_URL = 'mongodb://127.0.0.1:27017/example';
// console.log('🚀 ~ file: config.js:3 ~ MONGO_URL', typeof MONGO_URL, MONGO_URL);
const connectDb = async () => {
	try {
		const connect = await mongoose.connect(MONGO_URL, {});
		console.log(`MongoDb connected ${connect.connection.host}`);
	} catch (error) {
		console.log(error.message);
		process.exit();
	}                       
};

module.exports = connectDb;
