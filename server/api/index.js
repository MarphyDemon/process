var $api = require('./api');

$api.router.post('/login',(req, res) => {
	var params = req.body;
	var sql = "select * from user where username='"+ params.username + "' and password='" + params.password +"'";
	$api.conn.query(sql, function(err, result){
		if (err)  {
			console.log(err);
		}
		if (result) {
            console.log(result)
            $api.jsonWrite(res, result);
		}	
	})
})
//获取 session
// $api.router.get("/session",function(req, res) {
//     console.log("user in session");
//     console.log(req.session.user);
//     res.json({
//         user: req.session.user
//     });
//     res.end();
// })
module.exports = $api.router;