const router = require('express').Router();
const taskRouter = require('./taskRouter');
const shopRouters = require('./shopRouters');

module.exports = router.use('/tasks', taskRouter);
module.exports = router.use('/shop', shopRouters);
