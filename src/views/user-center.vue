<template>
    <div class="indexpage">
        <x-header :left-options="{showBack: false}">个人中心</x-header>
        <group>
            <cell title="我的账户" value="" @click.native=""></cell>
            <cell title="余额" @click.native=""></cell>
            <cell title="提现" is-link></cell>
            <cell title="地址管理" is-link link="/addressList">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
        </group>
        <x-button type="primary" @click.native="quit" class="submit">退出</x-button>
        <Menu></Menu>
    </div>
</template>

<script>
import API from '../fetch/api.js'
import Menu from '../components/menu'
import { XHeader, Cell ,Group, XButton} from 'vux'
export default {
    components: {
        Menu,
        XHeader,
        Cell,
        Group,
        XButton
    },
    data() {
        return {
        }
    },
    methods:{
        quit(){
            this.Coo.delCookie('username');
            window.location.href = '/#/'; 
        }
    }
    
}
</script>

<style lang="scss" scoped>
    
    
</style>
