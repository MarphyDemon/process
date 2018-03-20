//  检查是否输入用户名和密码
var checklogin = function(res, params){
    if(!params.username){
        res.json({
            body: '用户名不能为空！',
            success: false
        })
        return false;
    }else if(!params.password){
        res.json({
            body: '密码不能为空！',
            success: false
        })
        return false;
    }else{
        return true;
    }

}
//  登录接口返回值处理
var handleLogin = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        result = {
            body: {
                data: '登陆成功！'
            },
            success: true
        }
        res.json(result);
    }
}

// 检查用户输入用户名,号码,密码
var checkChange = function(res, params){
    if(!params.username){
        res.json({
            body: '用户名不能为空！',
            success: false
        })
        return false;
    }else if(!params.phoneNum){
        res.json({
            body: '电话号码不能为空！',
            success: false
        })
        return false;
    }else if(!params.password){
        res.json({
            body: '密码不能为空！',
            success: false
        })
        return false;
    }else{
        return true;
    }
}

//  修改密码接口返回值处理
var handleChange = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        if(params.affectedRows==1){
            result = {
                body: {
                    data: '修改成功！'
                },
                success: true
            }
        }else{
            result = {
                body: {
                    data: '修改失败！输入用户名或号码错误'
                },
                success: false
            }
        }
        res.json(result);
    }
}
//  检测用户是否存在是  输入用户名是否为空
var checkUserName = function(res, params){
    var result;
    if(!params.username){
        res.json({
            body: '用户名不能为空！',
            success: false
        })
        return false;
    }else{
        return true;
    }
}

// 用户是否存在接口处理
var hasUser = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        if(params.length){
            result = {
                body: {
                    data: {
                        message: '用户存在！',
                        hasUserFlag: true
                    }
                },
                success: true
            }
            res.json(result);
        }else{
            result = {
                body: {
                    data: {
                        message: '用户不存在！',
                        hasUserFlag: false
                    }
                },
                success: true
            }
            res.json(result);
        }
    }
}

//  增加用户  用户输入内容校验
var checkAddUser = function(res, params){
    var result;
    if(!params.username){
        res.json({
            body: '用户名不能为空！',
            success: false
        })
        return false;
    }else if(!params.sex){
        res.json({
            body: '性别不能为空！',
            success: false
        })
        return false;
    }else if(!params.college){
        res.json({
            body: '学校不能为空！',
            success: false
        })
        return false;
    }else if(!params.phoneNum){
        res.json({
            body: '号码不能为空！',
            success: false
        })
        return false;
    }else if(!params.password){
        res.json({
            body: '密码不能为空！',
            success: false
        })
        return false;
    }else{
        return true;
    }
}

//  增加用户  接口数据处理
var handleAddUser = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        if(params.affectedRows&&params.insertId){
            result = {
                body: {
                    data: '添加成功！'
                },
                success: true
            }
        }
        res.json(result);
    }
}

var handleAddress = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        if(params.affectedRows&&params.insertId){
            result = {
                body: {
                    data: '操作成功！'
                },
                success: true
            }
        }
        res.json(result);
    }
}
var UpdateAddress = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        result = {
            body: {
                data:'操作成功！'
            },
            success: true
        }
        res.json(result);
    }
}
var ViewAddress = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{

        for(var i = 0; i<params.length;i++){
            params[i].areaAdd=[];
            params[i].areaAdd.push(params[i].area)
            params[i].areaAdd.push(params[i].address)
        }
        result = {
            body: {
                data: params
            },
            success: true
        }
        res.json(result);
    }
}
var changeDefAddress = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        result = {
            body: '重置默认地址',
            success: true
        }
        res.json(result);
    }
}
var delAddress = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        result = {
            body: {
                data:'删除成功',
            },
            success: true
        }
        res.json(result);
    }
}
var userCon = {
    handleLogin,
    checklogin,
    checkChange,
    handleChange,
    hasUser,
    checkUserName,
    checkAddUser,
    handleAddUser,
    handleAddress,
    ViewAddress,
    changeDefAddress,
    UpdateAddress,
    delAddress,
}
module.exports = userCon;