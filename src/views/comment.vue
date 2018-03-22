<template>
<div>
    <div>
        <cell title="评星">
            <rater v-model="sStar" active-color="#FF9900" :margin="4" v-if="type ==1 || type == 3"></rater>
            <rater v-model="gStar" active-color="#FF9900" :margin="4" v-if="type ==2 || type == 4"></rater>
        </cell>
    </div>
    <div>     
        <group>
            <x-textarea title="评价" v-model="scomment" v-if="type ==1 || type == 3"></x-textarea>
            <x-textarea title="评价" v-model="gcomment" v-if="type ==2 || type == 4"></x-textarea>
        </group> 
    </div>
    <x-button @click.native="SubmitComment">提交评价</x-button>
</div>
</template>

<script>
import API from '../fetch/api.js'
import { XButton, Group, XTextarea, Cell, Rater } from 'vux'
export default {
    name: 'todo',
    components: {
         XButton, Group, XTextarea, Cell, Rater
    },
    created() {
    },
    mounted() {
    },
    data() {
        return {
            scomment: '',
            gcomment: '',
            sStar: 1,
            gStar: 1,
            type: this.$router.currentRoute.query.type,
            taskNum: this.$router.currentRoute.query.taskNum
        }
    },
    methods: {
        SubmitComment(){
            var self = this;
            if(self.type == 1){
                API.sCommentTask({scomment:self.scomment,sStar:self.sStar,taskNumber: self.taskNum}).then(res => {
                    if(res.success){
                        alert("评价成功");
                        self.$router.push({path: '/#/index'})
                    }else{
                        console.log(res.body);
                    }
                })
            }else if(self.type==2){ 
                API.gCommentTask({gcomment:self.gcomment,gStar:self.gStar,taskNumber: self.taskNum}).then(res => {
                    if(res.success){
                        alert("评价成功");
                        self.$router.push({path: '/#/index'})
                    }else{
                        console.log(res.body);
                    }
                })
            }else if(self.type==3){
                API.sCommentBuy({scomment:self.scomment,sStar:self.sStar,shopNum: self.taskNum}).then(res => {
                    if(res.success){
                        alert("评价成功");
                        self.$router.push({path: '/#/index'})
                    }else{
                        console.log(res.body);
                    }
                })
            }else if(self.type==4){
                API.sCommentBuy({gcomment:self.gcomment,gStar:self.gStar,shopNum: self.taskNum}).then(res => {
                    if(res.success){
                        alert("评价成功");
                        self.$router.push({path: '/#/index'})
                    }else{
                        console.log(res.body);
                    }
                })
            }
        }
    }

}
</script>
<style lang="scss" scoped>
</style>
