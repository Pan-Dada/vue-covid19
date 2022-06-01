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
  var sql = 'insert into user(username, password,tel,address) values (?, ?, ?, ?)';
  console.log(params);
  conn.query(sql, [params.username, params.password, params.tel, params.address], function(err, result) {
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
    var sql = "select * from user where username ='"+params.username+"'";
    console.log(sql);
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
  


module.exports = router;
