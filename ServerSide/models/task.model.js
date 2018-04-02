'use strict';
const
    mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let TaskSchema = new Schema({
	title : {
		type : String ,
		required : true
	},
	duedate : {
		type : Date,
		default : null
	},
	label : {
		type : String,
		enum : ['personal' , 'work' , 'important' ],
		default : 'personal'
	},
	status : {
		type : String,
		enum : ['progress' , 'completed' , 'archived' , 'deleted'],
		default : 'progress'
	},
	created_on : {
		type: Date,
		default : Date.now
	},
	created_by : {
		type : Schema.Types.ObjectId,
		ref:'User'
	},
	updated_on : {
		type : Date,
		default : Date.now
	}
});

module.exports =  mongoose.model( 'task' , TaskSchema);
