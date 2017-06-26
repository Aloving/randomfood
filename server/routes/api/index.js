const express = require('express');
const router = express.Router();

const reciept = require('./reciept');
const recieptcount = require('./recieptcount');

router.get('/reciept/:id', reciept.get);
router.get('/recieptcount', recieptcount.get);

module.exports = router;
