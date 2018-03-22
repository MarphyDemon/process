import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'
var domain = process.env.NODE_ENV !== 'production'?'':'';
//全局 axios 默认配置
// axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';

//POST传参序列化
axios.interceptors.request.use((config) => {
     config.headers["X-Requested-With"] = 'XMLHttpRequest'
     
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if (res.headers.loginurl) {
        // alert(res)
        // window.location.replace(res.headers.loginurl);
        // window.location.href ='/sso/user/toLogin';
        window.location.href ='/#/login';
    }
    if(!res.data.success){
        // _.toast(res.data.msg);
        // return Promise.reject(res);
    }
    return res;
}, (error) => {
    if (error.response.headers.loginurl) {
        // window.location.href = error.response.headers.loginurl
        // window.location.href ='/sso/user/toLogin';
        window.location.href ='/#/login';
        // https://dev.xinfushe.com/sso/login
    }
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}
// var domain = '/salary'

export default {
    /**
     * Daas    接口
     */
    // 一级序列接口&二级序列接口
    login(params){
        return fetch(domain + '/api/user/login',params);
    },
    checkUser(params){
        return fetch(domain + '/api/user/checkUser',params);
    },
    addUser(params){
        return fetch(domain + '/api/user/addUser',params);
    },
    change(params){
        return fetch(domain + '/api/user/change',params);
    },
    getAddress(params){
        return fetch(domain + '/api/user/getAddress',params);
    },
    getExpress(params){
        return fetch(domain + '/api/user/getExpress',params);
    },
    addAddress(params){
        return fetch(domain + '/api/user/addAddress',params);
    },
    selectAddress(params){
        return fetch(domain + '/api/user/selectAddress',params);
    },
    changeDefault(params){
        return fetch(domain + '/api/user/changeDefaultAddress',params);
    },
    UpdateAddress(params){
        return fetch(domain + '/api/user/UpdateAddress',params);
    },
    deleteAddress(params){
        return fetch(domain + '/api/user/deleteAddress',params);
    },
    createTask(params){
        return fetch(domain + '/api/user/createTask',params);
    },
    getTaskList(params){
        return fetch(domain + '/api/user/getTaskList',params);
    },
    createBuy(params){
        return fetch(domain + '/api/user/createBuy',params);
    },
    getBuyList(params){
        return fetch(domain + '/api/user/getBuyList',params);
    },
    selectTask(params){
        return fetch(domain + '/api/user/selectTask',params);
    },
    selectBuy(params){
        return fetch(domain + '/api/user/selectBuy',params);
    },
    logout(params){
        return fetch(domain + '/api/user/logout',params);
    },
    session(params){
        return fetch(domain + '/api/user/session',params);
    },
    startTask(params){
        return fetch(domain + '/api/user/startTask',params);
    },
    startBuy(params){
        return fetch(domain + '/api/user/startBuy',params);
    },

    receiptTask(params){
        return fetch(domain + '/api/user/receiptTask',params);
    },
    serviceTask(params){
        return fetch(domain + '/api/user/serviceTask',params);
    },
    sCommentTask(params){
        return fetch(domain + '/api/user/sCommentTask',params);
    },
    gCommentTask(params){
        return fetch(domain + '/api/user/gCommentTask',params);
    },
    receiptBuy(params){
        return fetch(domain + '/api/user/receiptBuy',params);
    },
    serviceBuy(params){
        return fetch(domain + '/api/user/serviceBuy',params);
    },
    sCommentBuy(params){
        return fetch(domain + '/api/user/sCommentBuy',params);
    },
    gCommentBuy(params){
        return fetch(domain + '/api/user/gCommentBuy',params);
    }
}
