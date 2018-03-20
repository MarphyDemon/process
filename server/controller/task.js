//  用户获取送达地点接口
var outputCreateTask = function(res, params){
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



var outputTask = {
    outputCreateTask,
}
module.exports = outputTask;