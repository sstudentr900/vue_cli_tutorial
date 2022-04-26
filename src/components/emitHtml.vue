<template>
    <div>
        <p>1.使用$emit 傳給父元件</p>
        <input
            type="text"
            @input="$emit('childName2', $event.target.value)" 
        />

        <p>2.使用 setup</p>
        <input 
            type="text"
            @change='customChange'
        />

        <p>3.使用methods</p>
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
            context.emit("childName3", event.target.value)
        }
        return {
            customChange
        }
    },

    //3.使用methods
    methods: {
        searchBook (event) {
            this.$emit("childName4", event.target.value)
        }
    }
}
</script>
