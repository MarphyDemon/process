
<template>
    <div class="indexpage">
        <x-header :left-options="{preventGoBack: true}" @on-click-back="backList">收货地址管理<router-link slot="right" class="add-address" to="/address"><img src="../assets/img/add-address.png" alt=""></router-link></x-header>
        <div class="address-list">
            <div class="address-module" v-for="(item,index) in addressList">
                <div class="fcolumn"><label>{{item.name}}</label><span>{{item.phoneNum}}</span></div>
                <div class="scolumn"><span>{{item.area}}{{item.address}}---{{item.detailAddress}}</span></div>
                <div class="tcolumn">
                    <radio-box :title="radioText" :status="item.status" v-on:childChange="ChangeStatus(item.id,index)"></radio-box>
                    <div class="rbutton">
                        <a class="btn" v-on:click="editAddress(item.id)"><img src="../assets/img/edit.png" alt=""><span>编辑</span></a>
                        <a class="del-btn" v-on:click="deleteAddress(item.id)"><img src="../assets/img/delete.png" alt=""><span>删除</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../fetch/api.js'
import { XHeader } from 'vux'
import RadioBox from '../components/radio' 

export default {
    components: {
        XHeader,
        RadioBox,
    },
    data() {
        return {
            addressList: [],
            mValue: '',
            radioText: '默认选中'
        }
    },
    create() {
    },
    mounted() {
        var self = this;
        self.init();
    },
    methods: {
        init() {
            var self = this;
            self.selectAddress();
        },
        selectAddress() {
            var self = this;
            var options = {
                username: self.Coo.getCookie('username')
            }
            API.selectAddress(options).then(res => {
                if(res.success){
                    self.addressList = res.body.data;
                }else{
                    console.log(res.body)
                }
            })
        },
        ChangeStatus(id,index){
            var self = this;
            for(var i=0;i<self.addressList.length;i++){
                if(i == index){
                    self.addressList[i].status?'':self.addressList[i].status=1;
                }else{
                    self.addressList[i].status = 0;
                }
            }
            var options = {
                id : id,
                username: self.Coo.getCookie("username")
            }
            API.changeDefault(options).then(res => {
                if(res.success){
                    console.log(res.body)
                }else{
                    console.log(res.body)
                }
            })
        },
        editAddress(id){
            var self = this;
            self.$router.push({path: '/address', query: {id: id, username: self.Coo.getCookie("username"),status: 1}});
        },
        deleteAddress(id){
            var self = this;
            var options = {
                id: id
            }
            API.deleteAddress(options).then(res => {
                if(res.success){
                    self.selectAddress();
                }else{
                    console.log(res.body)
                }
            })
        },
        backList(){
            var self = this;
            self.$router.push({path: '/userCenter'});
        }
    }
    
}
</script>


<style lang="scss" scoped>
    .indexpage{
        .add-address{
            margin-top: -7px;
            img{
                width: 32px;
            }
        }
        .address-list{
            .address-module{
                background: #fafafa;
                padding: 16px 16px;
                margin-bottom: 10px;
                .fcolumn{
                    padding-left: 5px;
                    display: flex;
                    margin-bottom: 10px;
                    label{
                        flex: 1;
                        text-align: left;
                    }
                    span{
                        flex: 1;
                        text-align: right;
                    }
                }
                .scolumn{
                    padding-left: 5px;
                    margin-bottom: 10px;
                }
                .tcolumn{
                    display: flex;
                    .checkBtn{
                        flex: 1;
                    }
                    .rbutton{
                        flex: 1;
                        text-align: right;
                        .btn{
                            line-height: 24px;
                            display: inline-block;
                            margin-right: 10px;
                            img{
                                width: 16px;
                                display: inline-block;
                                vertical-align: middle;
                                margin-top: -4px;
                            }
                        }
                        .del-btn{
                            line-height: 24px;
                            display: inline-block;
                            margin-right: 10px;
                            img{
                                width: 18px;
                                display: inline-block;
                                vertical-align: middle;
                                margin-top: -4px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>