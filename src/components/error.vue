<template>
    <div v-if="$parent.error" class="error">
        <p>{{$parent.error}}</p>
    </div>
</template>

<script>

export default {
    components: {
    },
    data(){
      return {
      }
    }

}
</script>
<style lang="scss" scoped>
    .error{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #f9d3cc;
        position: absolute;
        left: 0;
        top: 46px;
        z-index: 99;
        p{
            font-size: 14px;
            color: #f56c6c;
        }
    }
</style>
