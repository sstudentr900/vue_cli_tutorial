<template>
    <div>
        <h1>$route.query物件</h1>
        <button type='button' @click="buttonFn">改變route</button>
        <p>searchText:{{searchText}}</p>
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
