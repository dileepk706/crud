const express = require('express');
const services = require('../services/render');
const controller = require('../controller/findController');
const createController = require('../controller/creatController');
const updateController = require('../controller/updateController');
const deleteController = require('../controller/deleteController');


const rout = express.Router();

rout.get('/',services.homePage);
rout.get('/add-user',services.add_user); 
rout.get('/update-user',services.update_user);

//API calls
rout.get('/api/user',controller.find);
rout.post('/api/user',createController.create);
rout.put('/api/user/:userId',updateController.update);
rout.delete('/api/user/:userId',deleteController.delete);

module.exports = rout;

  
