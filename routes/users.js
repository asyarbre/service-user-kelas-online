const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');

router.post('/register', usersHandler.regiter);

module.exports = router;
