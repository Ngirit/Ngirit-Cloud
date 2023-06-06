'use strict';
const db = require('../config/database');
var mysql = require('mysql');
var md5 = require('md5');

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
  })
}
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
  })
}   
exports.getUserProfile = function (req, res) {
  let id = req.params.id

  db.query('select * from user where id_user = ?', [id], function (error, rows) {
      res.status(200).json({
          success: true,
          message: 'Data fetched successfully',
          userProfile: ({
              data: rows
          })
      })
  })
}
exports.showUserHistory = function (req, res) {
  let id = req.params.id

  db.query('select * from riwayat where id_user = ?', [id], function (error, rows, fields) {
      res.status(200).json({
          success: true,
          message: 'History fetched successfully',
          data: ({
              history: rows
          })
      })
  })
}
exports.index = function (req, res) {
  res.status(200).json({
      success: true,
      message: 'REST API is working'
  })
}