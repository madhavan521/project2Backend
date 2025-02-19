const express = require("express");  
const multer = require('multer');  
const foodrouter = express.Router();  
const ProtectRouter = require('../Middleware/ProtectRouter'); 
const { createfood, createfoodincrediant, getfood } = require("../Controller/FoodProductController");  

const storage = multer.memoryStorage();  
const upload = multer({ storage: storage });  

foodrouter.post('/create', ProtectRouter, upload.single('image'), createfood);  
foodrouter.post('/incre/create/:id' ,ProtectRouter,createfoodincrediant)
foodrouter.get('/get',ProtectRouter,getfood)

module.exports = foodrouter;