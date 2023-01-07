const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');

const SampleResource = require('../src/resources/sample');

AdminJS.registerAdapter({
	Resource: AdminJSMongoose.Resource,
	Database: AdminJSMongoose.Database,    
});
     
const admin = new AdminJS({
	rootPath: '/admin',

	resources: [SampleResource],
});
admin.watch();
const router = AdminJSExpress.buildRouter(admin);

module.exports = router;
