<template>
    <div>
        <h1>$emit 子傳父</h1>
        <p>子的值:{{inputValue}}</p>
        <emitHtml @searchBook="searchText" @customChange="logChange" @searchBookTwo="logChange2"/>
    </div>
</template>

<script>
import emitHtml from '@/components/emitHtml.vue'

export default {
    data() {
        return {
            inputValue: '',
        };
    },
    components:{
        emitHtml
    },
    computed: {
    },
    methods:{
        // 父元件監聽該事件名稱 searchText，獲得即時輸入的結果為 $event.target.value
        searchText(date) {
            this.inputValue = date
            console.log('1',this.inputValue)
        },
        logChange (event) {
            console.log('2',event)
        },
        logChange2 (event) {
            console.log('3',event)
        }
    }
}
</script>
