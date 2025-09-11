const express = require('express');
     const Router = express.Router();
 const { InfoController } = require('../../controllers');

  const  airplaneRoutes = require('./airplane-routes');
    Router.use('/airplane', airplaneRoutes)
     Router.get('/info', InfoController.info);

    module.exports =Router;
    