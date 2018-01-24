const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.post('/sort', controller.sort);

module.exports = router;