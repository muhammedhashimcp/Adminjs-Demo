const SampleOrder = require('../../models/sample.js');
const SampleNavigation = {
	name: 'Sample Demo',
	icon: 'Demo',
};
const date = new Date();
const pdate = new Date().toISOString();
console.log('🚀 ~ file: sample.js:8 ~ pdate', pdate);
const SampleResource = {
	resource: SampleOrder,
	options: {
		navigation: SampleNavigation,
		id: 'sample',
		properties: {},
		// actions: {
		// 	list: {
		// 		before: (request, context) => {
		// 			const { query = {} } = request;
		// 			if (Object.keys(query).length > 0) {
		// 				let newQuery = { ...query };
		// 				request.query = newQuery;
		// 			}
		// 			return request;
		// 		},
		// 	},
		// },
		editProperties: ['name', 'email', 'nickName'],
	},
};
module.exports = SampleResource;
