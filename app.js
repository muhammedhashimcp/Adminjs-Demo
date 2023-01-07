const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const express = require('express');
const adminRouter = require('./routes/admin.router');

const PORT = 3000;
const connectDb = require('./config/config');
const start = async () => {
	const app = express();
	connectDb();
	const admin = new AdminJS({});

	app.use(admin.options.rootPath, adminRouter);

	app.listen(PORT, () => {
		console.log(
			`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
		);
	});
};

start();
