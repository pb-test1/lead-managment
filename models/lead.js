const mongoose = require('mongoose');

// Lead Schema
const LeadSchema = mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	created_at:{
		type: Date,
		required: true,
		default: Date.now
	}
});

const Lead = module.exports = mongoose.model('Lead', LeadSchema);

// Model Functions
// Get All
module.exports.getAll = function (callback) {
	Lead.find({}).exec(callback);
}

// Get By Id
module.exports.getById = function (id, callback) {
	Lead.findById(id).exec(callback);
}

// Add
module.exports.add = function (newItem, callback) {
	newItem.save(callback);
}

// Edit
module.exports.edit = function (id, newItem, callback) {
	Lead.findByIdAndUpdate(id, newItem, callback);
}

// Delete
module.exports.delete = function (id, callback) {
	Lead.findByIdAndRemove(id).exec(callback);
}