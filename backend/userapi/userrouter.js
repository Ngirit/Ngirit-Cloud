const express = require('express');
var user = require('./userservice');
var control = require('./usercontroller');
var router = express.Router();

router.post('/api/v1/register', user.regist);
router.post('/api/v1/login', user.login);
router.post('/api/v1/create', control.createUser);
router.get('/api/v1/getlogin', control.getUserProfile);
router.get('/api/v1/getcontrol', control.getUser);


module.exports = router;