<template>
<div>
    <div v-for="item in $parent.TaskList" class="model">
        <div class="left">
            <div class="msg">
                <div class="left-msg">
                    <label>送达地点:</label>
                    <span>{{ item.taskAddress }}</span>
                </div>
                <div class="right-msg">
                    <label>送达时间:</label>
                    <span>{{ item.lastTime|formatDate('MM-dd hh:mm') }}</span>
                </div>
            </div>
            <div class="msg">
                <div class="left-msg">
                    <label>物品:</label>
                    <span>{{ item.goods }}</span>
                </div>
                <div class="right-msg">
                    <label>备注:</label>
                    <span>{{ item.remarks }}</span>
                </div>
            </div>
            <div class="msg">
                <div class="left-msg">
                    <label>金额:</label>
                    <span>{{ item.money|currency('￥',2) }}</span>
                </div>
                <div class="right-msg">
                    <label>状态:</label>
                    <span v-if="item.status == 0" style="color: blue;">已发布</span>
                    <span v-if="item.status == 1" style="color: blue;">配送中</span>
                    <span v-if="item.status == 2" style="color: green;">完成</span>
                    <span v-if="item.status == 3" style="color: red;">失败</span>
                </div>
            </div>
            <div class="msg">
                <div class="left-msg">
                    <label>任务类型:</label>
                    <span v-if="$parent.username == item.username">发布</span>
                    <span v-if="$parent.username == item.gname">接单</span>
                </div>
                <div class="right-msg">
                    <span v-if="$parent.username == item.username && item.status == 1" class="but" v-on:click="$parent.receiptBuy(item.shopNum)">确认收货</span>
                    <span v-if="$parent.username == item.gname && item.gStatus == 0" class="but" v-on:click="$parent.serviceBuy(item.shopNum)">确认送达</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'mybuy',

    components: {
    },
    created() {

    },
    mounted() {
        var self = this;
    },
    data() {
        return {
        }
    },
    methods: {
        init(){
        }
    }

}
</script>
<style lang="scss" scoped>
     .model{
        margin: 20px auto;
        padding: 10px 0px 0px 16px;
        width: 90%;
        height: 130px;
        font-size: 12px;
        border: 1px solid #222;
        border-radius: 10px;
        color: #444;
        .left{
            width: 80%;
            float: left;
            display: block;
            .msg{
                height: 30px;
                .left-msg{
                    width: 50%;
                    display: block;
                    line-height: 30px;
                    float: left;
                    label{
                        float: left;
                    }
                    span{    
                        max-width: 100px;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .right-msg{
                    width: 50%;
                    line-height: 30px;
                    display: inline-block;
                    label{
                        float: left;
                    }
                    span{    
                        max-width: 100px;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>
