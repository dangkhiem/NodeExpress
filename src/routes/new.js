const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewController');

router.use('/index', newController.index);
router.use('/show', newController.show);

module.exports = router;