<template>
    <div>
        <h2>store</h2>
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
