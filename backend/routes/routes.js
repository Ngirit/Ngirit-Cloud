const express = require('express');

const router = express.Router();

const authregister = require('../controller/controller');

const authlogin = require('../controller/controller');

router.post('/register', authregister.register);

router.post('/login', authlogin.login);

module.exports = router;