<template>
    <select v-model="index">
        <option v-for="(item,idx) in options" :key="idx" :value="idx">{{item.name}}</option>
    </select>
</template>

<script>
    export default {
        name: "Select",
        props: ["value", "options"],
        computed: {
            index: {
                get() {
                    console.log(this.value)
                    return this.value
                },
                set(val) {
                    console.log(val)
                        // input不能改
                    this.$emit('input', val)
                }
            }
        }
    }
</script>