//const mysql = require ('mysql');
const md5 = require ('md5');
const jwt = require('jsonwebtoken');

exports.register = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const result = {
        message: 'Register Berhasil',
        data: {
            uid: 1,
            name: name,
            email: email,
            password: md5(password)
        }
    }
    res.status(200).json(result);
}
    
exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    
      // Your authentication logic here (e.g., check email and password)
    
      // Assuming the authentication is successful
    const secretKey = 'your-secret-key';
    const payload = { email: email };
    const token = jwt.sign(payload, secretKey);
    
    const result = {
        message: 'Login Berhasil',
        data: {
          uid: 1,
          email: email,
          password: md5(password),
          token: token
        }
      }
        res.status(200).json(result);
}