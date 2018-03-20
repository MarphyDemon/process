<template>
    <div class="indexpage">
        <error></error>
        <x-header v-if="!status" :left-options="{preventGoBack: true}" @on-click-back="backList">新增收货地址</x-header>
        <x-header v-if="status" :left-options="{preventGoBack: true}" @on-click-back="backList">编辑收货地址</x-header>
        <group>
            <x-input title="收货姓名" v-model="name" name="name" placeholder="请输入收货人姓名" show-clear required></x-input>
            <x-input title="手机号码" v-model="phoneNum" name="mobile" placeholder="请输入手机号码" keyboard="number"></x-input>
            <div class="select-term">
                <group>
                    <popup-picker title="选择区域" placeholder="选择区域" :data="addrlist" :columns="2" v-model="address" show-name>
                    </popup-picker>
                </group>
            </div>
            <x-input title="详细地址" v-model="detailAddress" name="detail-address" placeholder="请输入详细地址" show-clear :max='40' required></x-input>
        </group>
        <x-button type="primary" @click.native="SubAddress" class="submit">提交</x-button>
    </div>
</template>

<script>
import API from '../fetch/api.js'
import { XHeader, Group, XInput, PopupPicker, XButton } from 'vux'
import Error from '../components/error'
export default {
    components: {
        XHeader,
        Group,
        XInput,
        PopupPicker,
        XButton,
        Error
    },
    data() {
        return {
            addrlist: [],
            address: [],
            name: '',
            username: '',
            phoneNum: '',
            detailAddress: '',
            error: '',
            status: false,
        }
    },
    created() {

    },
    mounted() {
        var self = this;
        self.init();
        if(self.$router.currentRoute.query.status){
            self.status = true;
        }
    },
    methods: {
        init() {
            var self = this;
            self.getAddress();
            self.getEditAddress();
        },
        getEditAddress(){
            var self = this;
            if(self.$router.currentRoute.query.status){
                var options = {
                    id: self.$router.currentRoute.query.id,
                    username: self.$router.currentRoute.query.username,
                }
                API.selectAddress(options).then(res => {
                    if(res.success){
                        self.name = res.body.data[0].name;
                        self.phoneNum = parseInt(res.body.data[0].phoneNum);
                        self.address = res.body.data[0].areaAdd;
                        self.detailAddress = res.body.data[0].detailAddress;
                    }else{
                        console.log(res.body)
                    }
                })
            }
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
        SubAddress(){
            var self = this;
            if(self.$router.currentRoute.query.status){
                self.updateAddress();
            }else{
                self.addAddress();
            }
        },
        updateAddress(){
            var self = this;
            if(self.address&&self.name&&self.phoneNum&&self.detailAddress){
                var options = {
                    name: self.name,
                    phoneNum: self.phoneNum,
                    address: JSON.stringify(self.address),
                    detailAddress: self.detailAddress,
                    username: self.Coo.getCookie("username"),
                    id: self.$router.currentRoute.query.id
                };
                API.UpdateAddress(options).then(res => {
                    if(res.success){
                        alert(res.body.data)
                        self.$router.push('/addressList');
                    }else{
                        console.log(res.body);
                    }

                })
            }else{
                self.error = '请填写完整信息！';
                return ;
            }
        },
        addAddress(){
            var self = this;
            if(self.address&&self.name&&self.phoneNum&&self.detailAddress){
                var options = {
                    name: self.name,
                    phoneNum: self.phoneNum,
                    address: JSON.stringify(self.address),
                    detailAddress: self.detailAddress,
                    username: self.Coo.getCookie("username"),
                };
                API.addAddress(options).then(res => {
                    if(res.success){
                        alert(res.body.data)
                        self.$router.push('/addressList');
                    }else{
                        console.log(res.body);
                    }

                })
            }else{
                self.error = '请填写完整信息！';
                return ;
            }
        },
        backList(){
            var self = this;
            self.$router.push({path: '/addressList'});
        }
    },
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
        .weui-cell:before{
            left: 0;
        }
        .submit{
            width: 300px;
            margin: 50px auto;
        }
    }
    
</style>
