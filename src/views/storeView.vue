<template>
    <div>
        <h1>store</h1>
        <p>{{books}}</p>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
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
