var $api = require('./api');
var outIndex = require('../controller/index');

$api.router.post('/getAddress',(req, res) => {
	var params = req.body;  
	var sql = "SELECT name,value,parent FROM address";
	$api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            	outIndex.outputAddress(res, result);
		}	
	})
})
$api.router.post('/getExpress',(req, res) => {
	var params = req.body;  
	var sql = "SELECT name FROM express";
	$api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            	outIndex.outputExpress(res, result);
		}	
	})
})
module.exports = $api.router;