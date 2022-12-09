const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')

router.post('/converter', controller.converter );

module.exports = router;