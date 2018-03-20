<template>
    <div class="female">
        <label for="female" >{{leftTitle}}</label>
        <span v-on:click="changeStatus" v-bind:class="{checked: status==true}"></span>
        <label for="female" >{{title}}</label>
    </div>
</template>

<script>

export default {
    data(){
      return {
      }
    },
    props: ['leftTitle','title','status'],
    methods:{
        changeStatus(){
            this.$emit('childChange',this.status);
        },
    }
}
</script>
<style lang="scss" scoped>
    .female{
        line-height: 24px;
        .checked{
            border: 1px solid #09BB07;
            background: url('../assets/img/checked.png') no-repeat;
            background-size: contain;
        }
        span{
            display: inline-block;
            vertical-align: sub;
            font-size: 16px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid #C9C9C9;
            margin-right: 4px;
        }
        input[type="radio"] {
            position: absolute;
            clip: rect(0, 0, 0, 0);
        }
        label{
            line-height: 24px;
        }
    }
</style>
<style>
    
</style>

