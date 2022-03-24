<template>
    <div>
        <h2>router-link：導航</h2>
        <p>to 目標路由</p>
        <img src="https://imgur.com/oNzcMgO.jpg" alt="">
        <p>tag 渲染標籤</p>
        <img src="https://imgur.com/IAVhyTq.jpg" alt="">
        <h2>點擊的路由產生class</h2>
        <p>.router-link-exact-active 和 .router-link-active</p>
        <h2>$route.query物件</h2>
        <button type='button' @click="buttonFn">改變route</button>
        <p>searchText:{{searchText}}</p>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10279602">路由搜查隊</a>
    </div>
</template>

<script>

export default {
    beforeRouteEnter(to, from, next) {
        console.log(12)
        next((vm) => {
            if (to.query.search) {
                vm.searchText = to.query.search;
            }
        });
    },
    data() {
        return {
            searchText: '',
            urlText:''
        };
    },
    components:{
    },
    computed: {
    },
    methods:{
        buttonFn() {
            console.log(this.$route.name)
            //url?search=customText
            this.$router.replace({
                name: this.$route.name,
                query: { search: '566' },
            });
        },
    }
}
</script>
