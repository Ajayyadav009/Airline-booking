const express = require('express');
     const Router = express.Router();
 const { InfoController } = require('../../controllers');
     Router.get('/info', InfoController.info);

    module.exports =Router;
    