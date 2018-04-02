"use strict";

const
    express = require('express'),
    router = express.Router(),
    isAuthenticated = require('../../middlewares/is-authenticated'),
    UserController = require('../../controllers/user.controller');


router.post('/login/' , UserController.login );
router.post('/register/' , UserController.createUser );

module.exports = function(app ) {

    app.use('/api/users',  router);

}