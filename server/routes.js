const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/sort', controller.sort);

module.exports = router;