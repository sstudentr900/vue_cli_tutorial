<template>
    <div>
        <h1>$emit 子傳父</h1>
        <p>子的值:{{inputValue}}</p>
        <emitHtml @searchBook="searchText" />
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
        searchText(date) {
            this.inputValue = date.target.value
            // console.log(this.inputValue)
            // console.log(date.target.value)
        },
    }
}
</script>
