<template>
    <div class="indexpage">
        <x-header :left-options="{preventGoBack: true}" @on-click-back="backList">新建任务</x-header>
        <div class="address-list" v-on:click="changeRecipient">
            <div class="position">
                <img src="../assets/img/position.png" alt="">
            </div>
            <div class="address-module" v-for="(item,index) in addressList" v-if="addressList.length">
                <div class="fcolumn">收货人：<label>{{item.name}}</label><span>{{item.phoneNum}}</span></div>
                <div class="scolumn"><span>{{item.area}}{{item.address}}---{{item.detailAddress}}</span></div>
            </div>
            <div class="address-module">
                <div class="fcolumn">暂无收货地址</span></div>
                <div class="scolumn">请先添加收货地址</div>
            </div>
            <div class="next">
                <img src="../assets/img/next.png" alt="">
            </div>
        </div>
        <div class="select-term">
            <group>
                <datetime v-model="sTime" title="送达时间" format="YYYY-MM-DD HH:mm" @on-change="changeSTime" year-row="{value}年"
                    month-row="{value}月" :display-format="Dateformatter" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" 
                    clear-text="清除" @on-clear="clearValue" confirm-text="完成" cancel-text="取消" :min-year='Year' :max-year='Year'>
                </datetime>
            </group>
            <group>
                <x-textarea title="代购物品" v-model="goods"></x-textarea>
            </group>
            <group>
                <x-textarea title="备注" v-model="remarks"></x-textarea>
            </group>
            <group>
                <x-input title="支付金额：" v-model="money"></x-input>
            </group>
        </div>
        <x-button type="primary" @click.native="createBuy" class="submit">提交</x-button>
    </div>
</template>

<script>
import API from '../fetch/api.js'
import { XHeader, XButton,Group, Datetime, XInput, XTextarea} from 'vux'
import { defaultCoreCipherList } from 'constants';
export default {
    components: {
        XHeader,
        XButton,
        Group,
        Datetime,
        XInput,
        XTextarea,
    }, 
    data() {
        return {
            addressList: '',
            sTime: '',
            Year: new Date().getFullYear(),
            remarks: '',
            goods: '',
            addressId: '',
            money: '',
            taskAddress: ''
        }
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
                username: self.Coo.getCookie("username"),
                status: 1
            }
            API.selectAddress(options).then(res => {
                if(res.success){
                    self.addressList = res.body.data;
                    self.addressId = self.addressList[0].id;
                    self.taskAddress = self.addressList[0].area+"-"+self.addressList[0].address+"-"+self.detailAddress;
                }else{
                    console.log(res.body)
                }
            })
        },
        // 创建任务单接口
        createBuy() {
            var self = this;
            var options = {
                addressId: self.addressId,
                lastTime: self.sTime,
                username: self.Coo.getCookie("username"),
                goods: self.goods,
                remarks: self.remarks,
                money: self.money,
                taskAddress: self.taskAddress
            }
            API.createBuy(options).then(res => {
                if(res.success){
                    alert('创建成功！');
                    self.$router.push({path: '/task'});
                }else{
                    console.log(res.body)
                }
            })
        },
        changeRecipient(){

        },
        backList(){
            var self = this;
            self.$router.push({path: '/task'});
        },
        clearValue (value) {
            this.sTime = ''
        },
        changeSTime(value) {
            this.sTime = value;
        },
        Dateformatter (val) {
            return val.slice(5,16);
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
        .address-list{
            background: #fafafa;
            .position{
                display: inline-block;
                height: 102px;
                line-height: 146px;
                position: absolute;
                left: 0;
                top: 46px;
                width: 48px;
                text-align: center;
                img{
                    width: 30px;
                }
            }
            .next{
                display: inline-block;
                height: 102px;
                line-height: 146px;
                position: absolute;
                right: 0;
                top: 46px;
                width: 48px;
                text-align: center;
                img{
                    width: 30px;
                }
            }
            .address-module{
                padding: 16px 0px;
                margin: 10px 48px;
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
            }
        }
        .submit{
            width: 300px;
            margin: 50px auto;
        }
    }
    
</style>
