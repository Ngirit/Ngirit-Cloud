const db = require('../config/database.js');
var mysql = require('mysql');
var md5 = require('md5');

exports.createUser = function(req, res) {
    var query = "INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?)";
    var table = ['control', 'username', 'budget', 'location', req.body.username, req.body.budget, req.body.location];
  
    query = mysql.format(query, table);
    db.query(query, function(error, result) {
      if (error) {
        res.status(500).json({
          success: false,
          error: error
        });
      } else {
        res.status(201).json({
          success: true,
          message: 'User created',
          user: {
            username: req.body.username,
            budget: req.body.budget,
            location: req.body.location
          }
        });
      }
    });
  };  
  exports.getUser = function(req, res) {
    var query = "SELECT * FROM ?? WHERE ?? = ?";
    var table = ['control', 'username', req.params.username];
  
    query = mysql.format(query, table);
    db.query(query, function(error, rows) {
      if (error) {
        res.status(500).json({
          success: false,
          error: error
        });
      } else {
        if (rows.length === 0) {
          res.status(404).json({
            success: false,
            message: 'User not found'
          });
        } else {
          var user = {
            username: rows[0].username,
            budget: rows[0].budget,
            location: rows[0].location
          };
          res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            user: user
          });
        }
      }
    });
  };
exports.editUserProfile = function (req, res) {
  var query = "update ?? set ?? = ?, ?? = ?, ?? = ? where ?? = ?"
  var table = ['user', 'username', req.body.username, 'email', req.body.email, 'password', md5(req.body.password),'id_user', req.body.id_user]

  query = mysql.format(query, table)
  db.query(query, function (error, rows) {
      if (error) {
          res.status(500).json({
              success: false,
              error: error
          })
      } else if (!error) {
          res.status(200).json({
              success: true,
              message: 'Data user with id '+req.body.id_user+' has updated',
              id_user: req.body.id_user,
              userName: req.body.username,
              email: req.body.email,
              password: md5(req.body.password)
          })
      }
  });
};
exports.deleteUserbyId = function (req, res) {
  var query = "delete from ?? where ?? = ?"
  var table = ['user', 'id_user', req.body.id_user]
  query = mysql.format(query, table)
  db.query(query, function (error, rows) {
      if (error) {
          res.status(500).json({
              success: false,
              error: error
          })
      } else if (!error) {
          res.status(200).json({
              success: true,
              message: 'User with id = ' +req.body.id_user+' has deleted'
          })
      }
  });
};   
exports.getUserProfile = function (req, res) {
  let id = req.params.id

  db.query('select * from user where id_user = ?', [id], function (error, rows) {
      res.status(200).json({
          success: true,
          message: 'Data fetched successfully',
          userProfile: ({
              data: rows
          })
      });
  });
};
exports.index = function (req, res) {
  res.status(200).json({
      success: true,
      message: 'REST API is working'
  });
};