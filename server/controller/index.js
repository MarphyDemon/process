//  用户获取送达地点接口
var outputAddress = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
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
}

var outputExpress = function(res, params){
    var result;
    if(typeof params === 'undefined'){
        res.json({
            body: '操作失败！',
            success: false
        });
    }else{
        var newexpress=[];
        for(var i = 0; i < params.length; i++){
            newexpress.push(params[i].name);
        }
        result = {
            body: {
                data: [newexpress]
            },
            success: true
        }
        res.json(result);
    }
}

var userIndex = {
    outputAddress,
    outputExpress
}
module.exports = userIndex;