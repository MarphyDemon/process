<template>
    <div class="menu">
        <tabbar v-model="$parent.index">
            <tabbar-item link="/index">
                <img slot="icon" src="../assets/img/express.png" v-if="currentUrl=='/index'">
                <img slot="icon" src="../assets/img/express0.png" v-if="currentUrl!='/index'">
                <span slot="label" v-bind:class="{ 'current': currentUrl=='/index'}" v-if="currentUrl=='/index'">快递接单</span>
                <span slot="label" v-bind:class="{ 'notcurrent': currentUrl!='/index'}" v-if="currentUrl!='/index'">快递接单</span>
            </tabbar-item>
            <tabbar-item link="/shopBuy">
                <img slot="icon" src="../assets/img/shop.png" v-if="currentUrl=='/shopBuy'">
                <img slot="icon" src="../assets/img/shop0.png" v-if="currentUrl!='/shopBuy'">
                <span slot="label" v-bind:class="{ 'current': currentUrl=='/shopBuy'}" v-if="currentUrl=='/shopBuy'">物品代购</span>
                <span slot="label" v-bind:class="{ 'notcurrent': currentUrl!='/shopBuy'}" v-if="currentUrl!='/shopBuy'">物品代购</span>
            </tabbar-item>
            <tabbar-item link="/task">
                <img slot="icon" src="../assets/img/task.png" v-if="currentUrl=='/task'">
                <img slot="icon" src="../assets/img/task0.png" v-if="currentUrl!='/task'">
                <span slot="label" v-bind:class="{ 'current': currentUrl=='/task'}" v-if="currentUrl=='/task'">发布任务</span>
                <span slot="label" v-bind:class="{ 'notcurrent': currentUrl!='/task'}" v-if="currentUrl!='/task'">发布任务</span>
            </tabbar-item>
            <tabbar-item link="/userCenter">
                <img slot="icon" src="../assets/img/person-center.png" v-if="currentUrl=='/userCenter'">
                <img slot="icon" src="../assets/img/person-center0.png" v-if="currentUrl!='/userCenter'">
                <span slot="label" v-bind:class="{ 'current': currentUrl=='/userCenter'}" v-if="currentUrl=='/userCenter'">个人中心</span>
                <span slot="label" v-bind:class="{ 'notcurrent': currentUrl!='/userCenter'}" v-if="currentUrl!='/userCenter'">个人中心</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
    computed:{
        currentUrl(){
            return this.$route.path;
        }
    },
    components: {
        Tabbar,
        TabbarItem,
        Group,
        Cell
    },
    data(){
      return {
      }
    }

}
</script>

<style>
.current{
    color: #1296db;
}
.notcurrent{
    color: #cdcdcd;
}
</style>
