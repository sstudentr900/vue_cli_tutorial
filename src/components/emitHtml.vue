<template>
    <div>
        <p>1.使用 inline events</p>
        <!--1.定義好事件名稱 searchBook 及所需傳遞的參數 $event，再將事件 $emit 傳給父元件-->
        <input
            type="text"
            @input="$emit('searchBook', $event.target.value)" />
        <p>2.使用 setup</p>
        <input 
            type="text"
            @change='customChange'
        />
        <p>3.使用 this.$emit</p>
        <input 
            type="text"
            @change='searchBook'
        />
    </div>
</template>

<script>
export default {
    //2.使用 setup ,元件建立前就執行 setup
    setup (props, context) {
        const customChange = (event) => {
            context.emit("customChange", event.target.value)
        }
        return {
            customChange
        }
    },
    //3.使用 this.$emit
    methods: {
        searchBook (event) {
            this.$emit("searchBookTwo", event.target.value)
        }
    }
}
</script>
