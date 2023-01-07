const mongoose = require('mongoose');
const  { model, Schema, Types }=mongoose

const sample = new Schema({
	email: String,
	nickName: String,
	date: { type: Date, default: new Date().toISOString() },

	name: { type: 'String', required: true },
	stringArray: { type: ['String'] },
	authors: [{ type: Types.ObjectId, ref: 'User' }],
	nestedDetails: new Schema(
		{
			age: { type: 'Number', required: true },
			height: { type: 'Number', required: true },
			placeOfBirth: { type: 'String', required: true },
			nested: new Schema(
				{
					extremelyNested: { type: 'String', required: true },
				},
				{ _id: false }
			),
		},
		{ _id: false }
	),
	parents: [
		new Schema(
			{
				firstName: { type: 'String', required: true },
				lastName: { type: 'String', required: true },
			},
			{ _id: false }
		),
	],
	items: [
		new Schema(
			{
				imageVariants: [
					new Schema(
						{
							imageUrl: { type: 'String', required: true },
							isApproved: { type: 'Boolean' },
							isDeleted: { type: 'Boolean' },
							dateCreated: { type: 'Date', default: Date.now },
						},
						{ _id: false }
					),
				],
			},
			{ _id: false }
		),
	],
});

const Sample = mongoose.model('sample', sample);
module.exports = Sample;
