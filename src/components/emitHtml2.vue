<template>
    <div>
        <p>從props 來的值 : {{ childName5 }}</p>
        <button @click="clickFn">傳值給父組件</button>
    </div>
</template>

<script>
    export default {
        props: ['childName5'],
        mounted() {
            console.log(this.$attrs)
        },
        methods: {
            clickFn() {
                this.$emit("childName6", 'childValue')
            },
        },
    }
</script>