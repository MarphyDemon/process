<template>
    <div class="indexpage">
        <x-header :left-options="{showBack: false}">快递广场</x-header>
        <div class="select-arr">
            <div class="select-term">
                <group>
                    <popup-picker placeholder="送达地点" :data="addrlist" :columns="2" v-model="address" @on-change="ChangeAddress"
                        :display-format="addrformatter" show-name >
                    </popup-picker>
                </group>
            </div>
            <div class="select-term">
                <group>
                    <popup-picker placeholder="快递公司" :data="expresslist" v-model="express" @on-change="ChangeExp">
                    </popup-picker>
                </group>
            </div>
            <div class="select-term">
                <group>
                    <datetime v-model="sTime" placeholder="送达时间" format="YYYY-MM-DD HH:mm" @on-change="changeSTime" year-row="{value}年"
                        month-row="{value}月" :display-format="Dateformatter" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" 
                        clear-text="清除" @on-clear="clearValue" confirm-text="完成" cancel-text="取消" :min-year='Year' :max-year='Year'>
                    </datetime>
                </group>
            </div>
        </div>
        <Todo></Todo>
        <Menu></Menu>
    </div>
</template>

<script>
import API from '../fetch/api.js'
import Menu from '../components/menu'
import { PopupPicker, Group, Cell, Datetime, XHeader, } from 'vux'
import Todo from '../components/todo'
import { add } from '../util/tool';
export default {
    name: 'index',
    components: {
        Cell,
        Group,
        PopupPicker,
        Datetime,
        Menu,
        XHeader,
        Todo
    },
    created() {

    },
    mounted() {
        var self = this;
        self.init();
    },
    data() {
        return {
            expresslist: [],
            addrlist: [],
            address: [],
            express: [],
            sTime: '',
            serviceTime: '14',
            Year: new Date().getFullYear(),
            TaskList: []
        }
    },
    methods: {
        init() {
            var self = this;
            self.getAddress();
            self.getExpress();
            self.changeStyle();
            self.getTaskList();
            // self.getsession();
        },
        // getsession(){
        //     var self = this;
        //     API.session().then(res => {
        //         if(res.success){
        //             console.log(res)
        //         }else{
        //             console.log(res)
        //         }
        //     })
        // },
        getAddress() {
            var self = this;
            API.getAddress().then(res => {
                if(res.success){
                    self.addrlist = res.body.data;
                }else{
                    console.log(res.body)
                }
            })
        },
        getExpress() {
            var self = this;
                API.getExpress().then(res => {
                    if(res.success){
                        self.expresslist = res.body.data;
                    }else{
                        console.log(res.body)
                    }
                })
        },
        changeStyle() {
            var arr = document.getElementsByClassName('vux-popup-picker-select');
            for(var i=0;i<arr.length;i++){
                arr[i].style.textAlign = "center";
            }
        },
        ChangeAddress() {
            var self = this;
            var address='';
            if(self.address.length>0){address =self.address[0]+"-"+self.address[1]+"-%";}
            var options = {
                taskAddress: address,
                taskexpress: self.express[0],
                lastTime: self.sTime
            }
            API.selectTask(options).then(res => {
                if(res.success){
                    self.TaskList = res.body.data;
                }else{
                    console.log(res.body)
                }
            })
        },
        ChangeExp () {
            var self = this;
            var address='';
            if(self.address.length>0){address =self.address[0]+"-"+self.address[1]+"-%";}
            var options = {
                taskAddress: address,
                taskexpress: self.express[0],
                lastTime: self.sTime
            }
            API.selectTask(options).then(res => {
                if(res.success){
                    self.TaskList = res.body.data;
                }else{
                    console.log(res.body)
                }
            })
        },
        clearValue (value) {
            this.sTime = ''
        },
        changeSTime() {
            var self = this;
            var address='';
            if(self.address.length>0){address =self.address[0]+"-"+self.address[1]+"-%";}
            var options = {
                taskAddress: address,
                taskexpress: self.express[0],
                lastTime: self.sTime
            }
            API.selectTask(options).then(res => {
                if(res.success){
                    self.TaskList = res.body.data;
                }else{
                    console.log(res.body)
                }
            })
        },
        addrformatter(val) {
            var that = this;
            for(var i = 0; i < that.addrlist.length; i++){
                if(that.addrlist[i].value == val[val.length-1]){
                    return that.addrlist[i].name;
                }
            }
            console.log(val)
        },
        Dateformatter (val) {
            return val.slice(5,16);
        },
        getTaskList(){
            var self = this;
            var options = {
                status: 0
            }
            API.getTaskList(options).then(res => {
                if(res.success){
                    self.TaskList = res.body.data;
                }else{
                    console.log(res.body);
                }
            })
        },
        // 接单开始任务 任务配送中
        startTask(username,taskNumber){
            var self = this;
            if(username == self.Coo.getCookie('username')){
                alert("不能自己接单！！！");
                return ;
            }
            var options = {
                gname: self.Coo.getCookie('username'),
                startTime: self.Common.getDate(new Date(),"yyyy-MM-dd hh:mm"),
                taskNumber: taskNumber
            };
            API.startTask(options).then(res => {
                if(res.success){
                    alert("接单成功，请立即配送！");
                    self.getTaskList();
                }else{
                    console.log(res.body);
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .indexpage{
        .select-arr{
            display: flex;
            .select-term{
                flex: 1;
                font-size: 14px;
            }
        }
    }
   
    
</style>
