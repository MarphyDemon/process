<template>
    <div class="indexpage">
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
                    <popup-picker placeholder="快递公司" :data="expresslist" v-model="express" @on-change="ChangeExp"></popup-picker>
                </group>
            </div>
            <div class="select-term">
                <group>
                    <datetime v-model="sTime" placeholder="送达时间" format="YYYY-MM-DD HH:mm" @on-change="changeSTime" year-row="{value}年"
                        month-row="{value}月" :display-format="Dateformatter" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" 
                        clear-text="清除" @on-clear="clearValue" confirm-text="完成" cancel-text="取消">
                    </datetime>
                </group>
            </div>
        </div>
    </div>
</template>

<script>
import { PopupPicker, Group, Cell, Datetime } from 'vux'
export default {
    name: 'index',
    components: {
        Cell,
        Group,
        PopupPicker,
        Datetime
    },
    created() {

    },
    mounted() {
        this.changeStyle();
    },
    data() {
        return {
            expresslist: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
            addrlist: [{
                    name: '中国',
                    value: 'china',
                    parent: 0
                }, {
                    name: '美国',
                    value: 'USA',
                    parent: 0
                }, {
                    name: '广东',
                    value: 'china001',
                    parent: 'china'
                }, {
                    name: '广西',
                    value: 'china002',
                    parent: 'china'
                }, {
                    name: '美国001',
                    value: 'usa001',
                    parent: 'USA'
                }, {
                    name: '美国002',
                    value: 'usa002',
                    parent: 'USA'
                }],
            address: [],
            express: [],
            sTime: '',
            serviceTime: '14'
        }
    },
    methods: {
        changeStyle() {
            var arr = document.getElementsByClassName('vux-popup-picker-select');
            for(var i=0;i<arr.length;i++){
                arr[i].style.textAlign = "center";
            }
        },
        ChangeAddress(val) {
        },
        ChangeExp (val) {
            console.log('val change', val)
        },
        clearValue (value) {
            this.value6 = ''
        },
        changeSTime(value) {
            console.log('change', value)
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .indexpage{
        margin: 0 10px 0 10px;
        .select-arr{
            display: flex;
            .select-term{
                flex: 1;
                font-size: 14px;
            }
        }
    }
    
</style>
