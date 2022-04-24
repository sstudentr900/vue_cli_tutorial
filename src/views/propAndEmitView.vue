<template>
    <div>
        <h1>父傳子</h1>
        <!--1.
        <p>: v-bind,@ v-on,childName內層引用名子,parentName外層的名子</p>
        <emitHtml :childName="parentName" @update="updateFn"/>-->

        <!--2.-->   
        <emitHtml :childName="parentName" @update="value=> parentName=value"/>

        <!--3.
        <h4>modelValue</h4>
        <p>{{msg}}</p>
        <emitHtml v-model="msg"/>
        <h1>子傳父</h1>-->
    </div>
</template>

<script>
import emitHtml from '@/components/emitHtml2.vue'

export default {
    data() {
        return {
            parentName: 'parentName',
            msg: 'Hello Vue!'
        }
    },
    components:{
        emitHtml
    },
    methods: {
        updateFn(event){
            this.parentName = event
        }
    },
}
</script>
