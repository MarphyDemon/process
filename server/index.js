// node 后端服务器
const userApi = require('./api/userApi');   // 用户登录注册忘记密码
const index = require('./api/index');   // 首页 
const task = require('./api/task');

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 后端api路由
app.use('/api/user', userApi);
app.use('/api/user', index);
app.use('/api/user',task);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');