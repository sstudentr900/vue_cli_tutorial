<template>
    <div>
        <p>從v-model 來的值 : {{ message }}</p>
        <button @click="clickFn">傳值給父組件</button>
    </div>
</template>

<script>
export default {
    props: ['message'],
    methods: {
        clickFn(){
            console.log(22);
            this.$emit("update:message",'childValue')
        }
    },
}
</script>
