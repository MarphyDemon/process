<template>
    <div class="indexpage">
        <x-header :left-options="{showBack: false}">代购广场</x-header>
        <div class="select-arr">
            <div class="select-term">
                <group>
                    <popup-picker placeholder="送达地点" :data="addrlist" :columns="2" v-model="address" @on-change="ChangeAddress"
                        :display-format="addrformatter" show-name >
                    </popup-picker>
                </group>
            </div>
            <!-- <div class="select-term">
                <group>
                    <popup-picker placeholder="快递公司" :data="expresslist" v-model="express" @on-change="ChangeExp">
                    </popup-picker>
                </group>
            </div> -->
            <div class="select-term">
                <group>
                    <datetime v-model="sTime" placeholder="送达时间" format="YYYY-MM-DD HH:mm" @on-change="changeSTime" year-row="{value}年"
                        month-row="{value}月" :display-format="Dateformatter" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" 
                        clear-text="清除" @on-clear="clearValue" confirm-text="完成" cancel-text="取消" :min-year='Year' :max-year='Year'>
                    </datetime>
                </group>
            </div>
        </div>
        <buy-list></buy-list>
        <Menu></Menu>
    </div>
</template>

<script>
import API from '../fetch/api.js'
import Menu from '../components/menu'
import BuyList from '../components/buylist'
import { PopupPicker, Group, Cell, Datetime, XHeader,  } from 'vux'
export default {
    name: 'shopbuy',
    components: {
        Cell,
        Group,
        PopupPicker,
        Datetime,
        Menu,
        XHeader,
        BuyList
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
            self.getBuyList();
        },
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
        ChangeAddress(val) {
            var self = this;
            var address='';
            if(self.address.length>0){address =self.address[0]+"-"+self.address[1]+"-%";}
            var options = {
                taskAddress: address,
                lastTime: self.sTime
            }
            API.selectBuy(options).then(res => {
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
        changeSTime(value) {
            var self = this;
            var address='';
            if(self.address.length>0){address =self.address[0]+"-"+self.address[1]+"-%";}
            var options = {
                taskAddress: address,
                lastTime: self.sTime
            }
            API.selectBuy(options).then(res => {
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
        },
        Dateformatter (val) {
            return val.slice(5,16);
        },
        getBuyList(){
            var self = this;
            var options = {
                status: 0
            }
            API.getBuyList(options).then(res => {
                if(res.success){
                    self.TaskList = res.body.data;
                }else{
                    console.log(res.body);
                }
            })
        }
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
