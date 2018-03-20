<template>
<div>
    <div v-for="item in $parent.TaskList" class="model">
        <div class="left">
            <div class="msg">
                <label>送达时间:</label>
                <span>{{ item.lastTime|formatDate('MM-dd hh:mm') }}</span>
            </div>
            <div class="msg">
                <label>送达地点:</label>
                <span>{{ item.taskAddress }}</span>
            </div>
            <div class="msg">
                <label>代购物品:</label>
                <span>{{ item.goods }}</span>
            </div>
            <div class="msg">
                <label>备注:</label>
                <span>{{ item.remarks }}</span>
            </div>
            <div class="msg">
                <label>金额:</label>
                <span>{{ item.money|currency('￥',2) }}</span>
            </div>
        </div>
        <div class="right">
            <img src="../assets/img/rob.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'buylist',
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
        height: 160px;
        font-size: 12px;
        border: 1px solid #222;
        border-radius: 10px;
        color: #444;
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
        }
        .right{
            width: 10%;
            display: inline-block;
            height: 160px;
            line-height: 200px;
        }
    }
</style>
