"use strict";

const
    express = require('express'),
    router = express.Router(),
    TaskController = require('../controllers/task.controller');

router.get('/', TaskController.getAll);
router.get('/:TaskId' , TaskController.read);
router.post('/', TaskController.create);
router.delete('/:taskId' , TaskController.del );
router.put('/:TaskId' , TaskController.update);

module.exports = function(app ) {

    app.use('/api/tasks', router);

}