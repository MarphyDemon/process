// sql语句
var sqlMap = {
	// 用户
	user: {
		add: 'insert into user(name, age) values (?, ?)',
		select: 'select * from user',
		// updata: "update user set age=543 where name='lidd'"
	}
}
module.exports = sqlMap;