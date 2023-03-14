// Imports
const express = require('express')
const router = express.Router()

// Import models through models/index.js
const db = require('../models')

// Import token validation and requireToken for Auth
const { handleValidateOwnership, requireToken } = require("../config/auth");

// Middleware to print out the HTTP method and the URL path for every request to our terminal
router.use((req, res, next) => 
{    
	console.log(`${req.method} ${req.originalUrl}`);    
	next();
});

// Index route (GET HTTP VERB)
// This route will catch GET requests to /follow/ and respond with all the user posts
router.get('/', async (req, res) => 
{ 
	try 
	{
		const trivia = await db.Trivia.find({})
		.exec()
		res.status(200).json(trivia)
	} catch (error) 
	{
		return next(error)
	}
});

// Show route (GET HTTP VERB)
// This route will catch GET requests to /follow/index/ and respond with a single user post
router.get('/:id', async (req, res, next) => 
{ 
	try 
	{
		const foundTrivia = await db.Post.findById(req.params.id)
		.exec();
		res.status(200).json(foundTrivia)
	} catch (error) 
	{
		return next(error)
	}
});

module.exports = router