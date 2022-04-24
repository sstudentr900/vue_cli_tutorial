<template>
    <div>
        <p>從props 來的 childName : {{ childName }}</p>
        <button @click="clickFn">傳值給父值$emits</button>

    
        <!--<p>從props 來的 msg : {{ modelValue }}</p>
        <button @click="msgFn">傳值給父值$emits</button>-->
    </div>
</template>

<script>
export default {
    props: ['childName'],
    // props: ['modelValue'],
    // emits: ['update:enterCustomValue'],
    methods: {
        clickFn(){
            console.log(11);
            this.$emit("update",'122')
        },
        msgFn(){
            console.log(22);
            this.$emit("update:modelValue",'122')
        }
    },
}
</script>
