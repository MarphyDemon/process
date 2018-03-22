<template>
<div>
    <div v-for="item in $parent.TaskList" class="model">
        <div class="left">
            <div>
                <div class="left-msg">
                    <label>快递公司:</label>
                    <span>{{ item.taskexpress }}</span>
                </div>
                <div class="right-msg">
                    <label>送达地点:</label>
                    <span>{{ item.taskAddress }}</span>
                </div>
            </div>
            <div>
                <div class="left-msg">
                    <label>送达时间:</label>
                    <span>{{ item.lastTime|formatDate('MM-dd hh:mm') }}</span>
                </div>
                <div class="right-msg">
                    <label>重量:</label>
                    <span>{{ item.weight }}kg</span>
                </div>
            </div>
            <div>
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
            <div>
                <div class="left-msg">
                    <label>任务类型:</label>
                    <span v-if="$parent.username == item.username">发布</span>
                    <span v-if="$parent.username == item.gname">接单</span>
                </div>
                <div class="right-msg">
                    <span v-if="$parent.username == item.username && item.status == 1" class="but" v-on:click="$parent.receiptTask(item.taskNumber)">确认收货</span>
                    <span v-if="$parent.username == item.gname && item.gStatus == 0" class="but" v-on:click="$parent.serviceTask(item.taskNumber)">确认送达</span>
                </div>
            </div>
        </div>
        <div class="quick" v-if="item.quick=='1'">
            <img src="../assets/img/urgent.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'todo',
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
        position: relative;
        .left{
            width: 80%;
            float: left;
            display: block;
            line-height: 30px;
            .left-msg{
                width: 50%;
                display: block;
                float: left;
            }
            .right-msg{
                width: 50%;
                display: inline-block;
            }
        }
        .quick{
            position: absolute;
            top: 30%;
            right: 20px;
            img{
                width: 40px;
            }
        }
    }
</style>
