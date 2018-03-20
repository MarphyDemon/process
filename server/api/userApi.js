var $api = require('./api');
var userCon = require('../controller/userCon');

// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var session = require('cookie-session');

// var app = $api.express();
// app.use(cookie('sessiontest'));
// app.use(session({
//  secret: 'sessiontest',//与cookieParser中的一致
//  resave: true,
//  saveUninitialized:true
// }));
// 使用 cookieParser 中间件;
// $api.router.use(cookieParser());
// $api.router.use(session({
//     secret: 'express'
// })) 
// 增加用户接口
$api.router.post('/addUser', (req, res) => {   
	var params = req.body;  
	if(userCon.checkUserName(res, params)){
		var sql = "insert into user(username, sex, college, studentId, phoneNum, password) values ('"+ params.username +"','"+ params.sex+"','"+ params.college+"','"+ params.studentId+"','"+ params.phoneNum+"','"+ params.password+"')"; 
		$api.conn.query(sql, function(err, result) {    
			if (err) {       
				console.log(err);
			}        
			if (result) {
				console.log(result)
				userCon.handleAddUser(res, result);
			}
		})
	}
});
// 检查用户是否存在
$api.router.post('/checkUser', (req, res) => {
    var params = req.body;   
	if(userCon.checkUserName(res, params)){ 
		var sql = "select username from user where username='"+ params.username +"'";
		$api.conn.query(sql, function(err, result) {    
			if (err) {       
				console.log(err);
			}        
			if (result) {
				console.log(result)
				userCon.hasUser(res, result);
			}
		})
	}
});

//	用户修改密码处理
$api.router.post('/change', (req, res) => {
	var params = req.body;
	if(userCon.checkChange(res, params)){
		var sql = "update user set password='" + params.password + "' where username='"+ params.username +"' and phoneNum='"+ params.phoneNum + "'";
		$api.conn.query(sql, function(err, result) {
			if (err)  {
				console.log(err);
			}
			if (result) {
				userCon.handleChange(res, result);
			}
		}) 
	}
})

// 用户登录接口
$api.router.post('/login',(req, res) => {
	var params = req.body;
	if(userCon.checklogin(res, params)){
		var sql = "select * from user where (username='"+ params.username + "' or phoneNum='" + params.username +"')" + " and password='" + params.password +"'";
		$api.conn.query(sql, function(err, result){
			if (err)  {
				console.log(err);
			}
			if (result) {
				userCon.handleLogin(res, result);
				// if(req.session.user){req.session.user = req.session.user;}
				// req.session.user = params.username;
				// console.log(req.session.user,'login')
				// res.end();
			}	

		})
	}
})
// // 退出
// $api.router.post("/logout",function(req, res) {
//     delete req.session.user;
//     res.end();
// })
// //获取 session
// $api.router.post("/session",function(req, res) {
// 	// res.send("欢迎再一次访问");
// 	console.log(req.session.user)	
//     res.json({
//         user: req.session.user
//     });
//     res.end();
// }) 
// 增加收货接口
$api.router.post('/addAddress', (req, res) => {   
	var params = req.body;
	var address = eval(params.address);
	var sql = "insert into userAddr(name, phoneNum, area, address, detailAddress, username, status) values ('"+ params.name +"','"+ params.phoneNum +"','"+ address[0]+"','"+ address[1]+"','"+ params.detailAddress+"','"+ params.username+"',0)"; 
	$api.conn.query(sql, function(err, result) {    
		if (err) {       
			console.log(err);
		}        
		if (result) {
			userCon.handleAddress(res, result);
		}
	})
});

// 查询用户名下所有收货地址˚
$api.router.post('/selectAddress', (req, res) => {   
	var params = req.body;
	var sql;
	if(params.status){
		sql = "select id,name,phoneNum,area,address,detailAddress,status from userAddr where username='"+ params.username +"' and status="+params.status;
	}else if(params.id){
		sql = "select id,name,phoneNum,area,address,detailAddress,status from userAddr where username='"+ params.username +"' and id="+params.id; 
	}else{
		sql = "select id,name,phoneNum,area,address,detailAddress,status from userAddr where username='"+ params.username +"'"; 
	}
	console.log(sql)
	$api.conn.query(sql, function(err, result) {    
		if (err) {       
			console.log(err);
		}        
		if (result) {
			userCon.ViewAddress(res, result);
		}
	})
});
// 修改用户名下默认地址
$api.router.post('/changeDefaultAddress', (req, res) => {   
	var params = req.body;
	var sql = "update userAddr as add1,userAddr as add2 set add1.status =0,add2.status=1 where add1.username='"+params.username +"' and add2.id='"+params.id+"' and add2.username='" +params.username +"'";
	$api.conn.query(sql, function(err, result) {    
		if (err) {       
			console.log(err);
		}        
		if (result) {
			userCon.changeDefAddress(res, result);
		}
	})
});
// 修改收货接口
$api.router.post('/UpdateAddress', (req, res) => {   
	var params = req.body;
	var address = eval(params.address);
	var sql = "update userAddr set name='"+params.name+"',phoneNum='"+params.phoneNum+"',area='"+address[0]+"',address='"+address[1]+"',detailAddress='"+params.detailAddress+"',username='"+params.username+"'where id="+params.id;
	$api.conn.query(sql, function(err, result) {    
		if (err) {       
			console.log(err);
		}        
		if (result) {
			userCon.UpdateAddress(res, result);
		}
	})
});
// 删除收货接口
$api.router.post('/deleteAddress', (req, res) => {   
	var params = req.body;
	var sql = "DELETE FROM userAddr WHERE id="+params.id;
	$api.conn.query(sql, function(err, result) {    
		if (err) {       
			console.log(err);
		}        
		if (result) {
			userCon.delAddress(res, result);
		}
	})
});
module.exports = $api.router;