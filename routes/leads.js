const express = require('express');
const router = express.Router();

const Lead = require('../models/lead');

// Get All
router.get('/', (req, res, next) =>{
	Lead.getAll((err, data) =>{
		if (err){
			res.status(500).json({
				message: 'There was some error. ' + err
			});
		} else{
			res.status(200).json(data);
		}
	});
});

// Add
router.post('/', (req, res, next) =>{
	let newItem = new Lead({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		phone: req.body.phone
	});

	Lead.add(newItem, (err, data) =>{
		if (err){
			res.status(500).json({
				message: 'There was some error. ' + err
			});
		} else{
			res.status(200).json(data);
		}
	});
});

// Edit
router.put('/:id', (req, res, next) =>{
	let newItem = new Lead({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		phone: req.body.phone
	});

	Lead.edit(req.params.id, newItem, (err, data) =>{
		if (err){
			res.status(500).json({
				message: 'There was some error. ' + err
			});
		} else{
			res.status(200).json(data);
		}
	});
});

// Delete
router.delete('/:id', (req, res, next) =>{
	Lead.delete(req.params.id, (err, data) =>{
		if (err){
			res.status(500).json({
				message: 'There was some error. ' + err
			});
		} else{
			res.status(200).json(data);
		}
	});
});

// Get By Id
router.get('/:id', (req, res, next) =>{
	Lead.getById((err, data) =>{
		if (err){
			res.status(500).json({
				message: 'There was some error. ' + err
			});
		} else{
			res.status(200).json(data);
		}
	});
});

module.exports = router;