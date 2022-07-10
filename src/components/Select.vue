<template>
    <select v-model="index">
        <option v-for="(item,idx) in options" :key="idx" :value="idx">{{item.name}}</option>
    </select>
</template>

<script>
    export default {
        name: "Select",
        props: ["value", "options"], //接收父傳來的值
        computed: {
            index: {
                get() {
                    //取得父model.value的值 
                    return this.value
                },
                set(val) {
                    //回傳給父值
                    this.$emit('input', val)
                }
            }
        }
    }
</script>