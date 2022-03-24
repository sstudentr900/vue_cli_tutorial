<template>
    <div>
        <h2>Vuex</h2>
        <img src="https://vuex.vuejs.org/vuex.png" alt="">
        <p>主要以四個核心概念——State、Getters、Mutations、Actions——所組成， Modules 可再進行模組化</p>
        <p>dispatch -> action 發送 API 從後端取得資料後，commit -> mutation</p>
        <p>mutation 改變 state，並且是唯一可以改變 state 的方法</p>
        <p>透過 getter 取得 state 資料，再到元件中引入 getter 並將資料渲染至畫面上</p>
        <p>{{books}}</p>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch("fetchBookList");
    },
    computed: {
        books() {
            return this.$store.getters["bookList"];
        },
    },
}
</script>
