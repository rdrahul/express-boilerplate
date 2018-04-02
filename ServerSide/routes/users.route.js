"use strict";

const
    express = require('express'),
    router = express.Router(),
    isAuthenticated = require('../middlewares/is-authenticated'),
    UserController = require('../controllers/user.controller');

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.post('/login/' , UserController.login );

module.exports = function(app ) {

    app.use('/api/users', isAuthenticated ,  router);

}