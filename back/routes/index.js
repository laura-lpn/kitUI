const express = require('express');
const router = express.Router();
const kituiRouter = require('./kitui.js');

router.use('/kitui', kituiRouter);

module.exports = router;