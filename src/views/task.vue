<template>
    <div class="indexpage">
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" :left-options="{showBack: false}">
            任务
            <!-- <router-link slot="right" class="add-address" to="/createTask">
                <img src="../assets/img/add-address.png" alt="">
            </router-link> -->
        </x-header>
        <button-tab v-model="taskType" style="padding: 15px 15px 0 15px;">
            <button-tab-item @on-item-click="chooseExpress">快递任务</button-tab-item>
            <button-tab-item @on-item-click="chooseBuy">代购任务</button-tab-item>
        </button-tab>
        <my-task v-if="!taskType"></my-task>
        <my-buy v-if="taskType"></my-buy>
        <Menu></Menu>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="newCreate"></actionsheet>
        </div>
    </div>
</template>

<script>
import API from '../fetch/api.js'
import Menu from '../components/menu'
import MyTask from '../components/mytask'
import MyBuy from '../components/mybuy'
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        Menu,
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem,
        MyTask,
        MyBuy,
    },
    data() {
        return {
            menus: {
                menu1: '发布快递任务',
                menu2: '发布代购任务'
            },
            showMenus: false,
            TaskList: [],
            taskType: 0,
            username: this.Coo.getCookie('username'),
            taskNum: '',
        }
    },
    mounted() {
        var self = this;
        self.init();
    },
    methods:{
        init(){
            var self = this;
            self.chooseExpress();
        },
        newCreate(key){
            var that = this;
            key=='menu1'?that.$router.push({ path:'/createTask'}):that.$router.push({ path:'/createBuyTask'})
        },
        chooseExpress(){
            var self = this;
            var options = {
                username: self.Coo.getCookie("username")
            }
            API.getTaskList(options).then(res => {
                if(res.success){
                    self.TaskList = res.body.data;
                }else{
                    console.log(res.body);
                }
            })
        },
        chooseBuy(){
            var self = this;
            var options = {
                username: self.Coo.getCookie("username")
            }
            API.getBuyList(options).then(res => {
                if(res.success){
                    self.TaskList = res.body.data;
                }else{
                    console.log(res.body);
                }
            })
        },
        // type 1,2,3,4 分别代表快递任务雇主收货，配送员确认送达，代购任务雇主收货，配送员确认送达
        receiptTask(taskNum){
            var self = this;
            self.taskNum = taskNum;
            API.receiptTask({taskNumber: taskNum}).then(res => {
                if(res.success){
                    alert("确认收货成功！")
                    self.$router.push({path: '/comment', query:{ taskNum: self.taskNum, type: 1}});
                }else{
                    console.log(res.body);
                }
            })
        },
        serviceTask(taskNum){
            var self = this;
            self.taskNum = taskNum;
            API.serviceTask({taskNumber: taskNum}).then(res => {
                if(res.success){
                    alert("确认送达成功！")
                    self.$router.push({path: '/comment', query:{ taskNum: self.taskNum, type: 2}});
                }else{
                    console.log(res.body);
                }
            })
        },
        receiptBuy(taskNum){
            var self = this;
            self.taskNum = taskNum;
            console.log(taskNum)
            API.receiptBuy({shopNum: taskNum}).then(res => {
                if(res.success){
                    alert("确认送达成功！")
                    self.$router.push({path: '/comment', query:{ taskNum: self.taskNum, type: 3}});
                }else{
                    console.log(res.body);
                }
            })
        },
        serviceBuy(taskNum){
            var self = this;
            self.taskNum = taskNum;
            API.serviceBuy({shopNum: taskNum}).then(res => {
                if(res.success){
                    alert("确认送达成功！")
                    self.$router.push({path: '/comment', query:{ taskNum: self.taskNum, type: 4}});
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
        .add-address{
            margin-top: -7px;
            img{
                width: 32px;
            }
        }
    }
    .vux-button-group > a.vux-button-group-current{
        color: #333;
        background: #ffe26d;
    }
    .vux-button-group > a.vux-button-tab-item-first:after {
        border: 1px solid #ccc;
        color: #ccc;
    }
    .vux-button-group > a.vux-button-tab-item-last:after{
        border-right: 1px solid #ccc;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-left: none;
    }
    .vux-button-group > a{
        color: #555;
    }
</style>
