<template>
    <div>
        <h1>prop 父傳子</h1>
        <p>傳入的名稱 = "傳入的值"</p>
        <propHtml text1="All" :text2="books" />
    </div>
</template>

<script>
import propHtml from '@/components/propHtml.vue'

export default {
    components:{
        propHtml
    },
    computed: {
        books() {
            return 'text'
        },
    },
}
</script>
