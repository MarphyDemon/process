var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// var session = require("express-session");
// var cookie = require("cookie-parser");

var jsonWrite = function(res, params) {
    var result;
    if(typeof params === 'undefined'){
        res.json({
            code: '1',
            msg: '操作失败'
        });
    }else{
        result = {
            body: {
                data: params
            },
            success: true
        }
        res.json(result);
    }
};
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
// sql语句
var api = {
    models,
    express,
    router,
    mysql,
    conn,
    jsonWrite,
}
module.exports = api;