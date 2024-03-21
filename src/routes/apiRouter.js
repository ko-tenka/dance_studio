const router = require('express').Router();
const taskRouter = require('./taskRouter');

module.exports = router.use('/tasks', taskRouter);
