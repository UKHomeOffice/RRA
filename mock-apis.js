'use strict';

const router = require('express').Router();

// router.use('/file', require('./mocks/image-upload'));
router.use('/api/image-upload', require('./mocks/image-upload'));

module.exports = router;
