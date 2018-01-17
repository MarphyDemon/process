var $api = require('./api');
var userCon = require('../controller/userCon');

// 增加用户接口
$api.router.post('/addUser', (req, res) => {   
	var params = req.body;  
	if(userCon.checkUserName(res, params)){
		var sql = "insert into user(realname, username, sex, college, studentId, phoneNum, password) values ('"+ params.realname +"','"+ params.username +"','"+ params.sex+"','"+ params.college+"','"+ params.studentId+"','"+ params.phoneNum+"','"+ params.password+"')"; 
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
			}	
		})
	}
})

module.exports = $api.router;