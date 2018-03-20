var $api = require('./api');
var outputTask = require('../controller/task');

$api.router.post('/createTask',(req, res) => {
	var params = req.body;  
    var sql = "insert into task(addressId,lastTime,taskexpress,status,username,weight,weightsalary,quick,quicksalary,remarks,smallmoney,money,taskAddress) values('"
            +params.addressId+"','"+params.lastTime+"','"+params.taskexpress+"','"+params.status+"','"+params.username+"','"+params.weight
            +"','"+params.weightsalary+"','"+params.quick+"','"+params.quicksalary+"','"+params.remarks+"','"+params.smallmoney+"','"+params.money+"','"+params.taskAddress+"')";
	$api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            outputTask.outputCreateTask(res, result);
		}	
	})
})
$api.router.post('/getTaskList',(req, res) => {
	var params = req.body;
	var sql;
	sql="Select * From task Where 1=1";
	if(params.username){sql+=" And username = '"+params.username+"'";}
	if(params.status != ''){sql+=" And status='"+params.status+"'";}
      $api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            outputTask.outputCreateTask(res, result);
		}	
	})
})
$api.router.post('/createBuy',(req, res) => {
	var params = req.body;  
    var sql = "insert into buy(username,lastTime,addressId,remarks,goods,money,taskAddress) values('"
            +params.username+"','"+params.lastTime+"','"+params.addressId+"','"+params.remarks+"','"+params.goods+"','"+params.money+"','"+params.taskAddress+"')";
	$api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            outputTask.outputCreateTask(res, result);
		}	
	})
})
$api.router.post('/getBuyList',(req, res) => {
	var params = req.body;
	var sql;
	sql="Select * From buy Where 1=1";
	if(params.username){sql+=" And username = '"+params.username+"'";}
	if(params.status != ''){sql+=" And status='"+params.status+"'";}
      $api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            outputTask.outputCreateTask(res, result);
		}	
	})
})
$api.router.post('/selectTask',(req, res) => {
	var params = req.body;
	var sql;
	// if(params.taskexpress == '全部'){sql = "select * from task"}
	// else{sql = "select * from task where taskAddress like'"+params.taskAddress+"' or taskexpress='"+params.taskexpress+"'or lastTime='"+params.lastTime+"'";}
	sql="Select * From task Where 1=1";
	if(params.taskAddress != ''){sql+=" And taskAddress like '"+params.taskAddress+"'";}
	if(params.taskexpress&&params.taskexpress!="全部"){sql+=" And taskexpress='"+params.taskexpress+"'";}
	if(params.lastTime != ''){sql+=" And lastTime='"+params.lastTime+"'";}
	console.log(sql)
      $api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            outputTask.outputCreateTask(res, result);
		}	
	})
})
$api.router.post('/selectBuy',(req, res) => {
	var params = req.body;
	var sql;
	// if(params.taskexpress == '全部'){sql = "select * from task"}
	// else{sql = "select * from task where taskAddress like'"+params.taskAddress+"' or taskexpress='"+params.taskexpress+"'or lastTime='"+params.lastTime+"'";}
	sql="Select * From buy Where 1=1";
	if(params.taskAddress != ''){sql+=" And taskAddress like '"+params.taskAddress+"'";}
	if(params.lastTime != ''){sql+=" And lastTime='"+params.lastTime+"'";}
	console.log(sql)
      $api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            outputTask.outputCreateTask(res, result);
		}	
	})
})
module.exports = $api.router;