// import express 
const express = require('express');

// import main controller
const mainController = require("");

// creating router
const router = express.Router();
console.log("router loaded successfully");

// main page route
router.get('/', mainController.main);

// create todo route
router.post('/create-task', mainController.create);

// delete single todo route
router.get('/delete-task:id', mainController.delete);

//delete multiple todo tasks route
router.post('/delete-task',mainController.deleteSelected);

//Export router
module.exports = router;