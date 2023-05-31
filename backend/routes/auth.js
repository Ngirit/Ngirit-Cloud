const express = require('express');

const router = express.Router();

const authControl = require('../controller/auth');

router.post('/register', authControl.register);
