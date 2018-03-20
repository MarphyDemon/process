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
                <div class="right-msg" v-if="item.quick=='1'">
                    <img src="../assets/img/urgent.png" alt="">
                </div>
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
        height: 110px;
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
            .right-msg{
                width: 50%;
                display: inline-block;
                img{
                    width: 30px;
                }
            }
        }
        .right{
            width: 10%;
            display: inline-block;
            height: 110px;
            line-height: 150px;
        }
    }
</style>
