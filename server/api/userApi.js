var models = require('../db');

var express = require('express');

var router = express.Router();

var mysql = require('mysql');


// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect(function (err) {
  if (err) {
      console.log('[query] - :' + err);
      return;
  }
  else{
    console.log('[connection connect]  succeed!');
  }
  
});

var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {

    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {

    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var params = req.body;
  var sql = 'insert into user(userid, username, password,tel,address) values (?, ?, ?, ?, ?)';
  console.log(params);
  conn.query(sql, [params.userid, params.username, params.password, params.tel, params.address], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 获取用户详细信息
router.post('/getinfo', (req, res) => {
    var params = req.body;
    var sql = "select * from user where userid='"+params.userid+"'";
    console.log(sql);
    conn.query(sql, [params.userid], function(err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        console.log(res);
        jsonWrite(res, result);
      }
    })
  });
  
// 修改用户信息
router.post('/updateUser', (req, res) => {
  var params = req.body;
  console.log(req.body);
  var sql = " update user set username = '"+ params.username +"' ,tel = '"+ params.tel +"' ,address = '"+ params.address + "'where userid = '" + params.userid + "'";
  console.log(params);
  conn.query(sql, [params.username,params.tel,params.address,params.userid], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(res);
      jsonWrite(res, result);
    }
  })
});


// 删除用户
router.post('/deleteUser', (req, res) => {
  var params = req.body;
  var sql = " delete from user where userid = '" + params.userid + "'";
  console.log(params);
  conn.query(sql, [params.username], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(res);
      jsonWrite(res, result);
    }
  })
});


//上传图片后将图片信息添加到数据库
router.post('/addPic', (req, res) => {
  var params = req.body;
  var sql = 'insert into pictures(name, size, type,url) values (?, ?, ?, ?)';
  console.log(params);
  conn.query(sql, [params.name, params.size, params.type, params.url], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});


module.exports = router;
