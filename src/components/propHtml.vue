<template>
    <div>
        <h2>可使用以下型別:</h2>
        <p>String</p>
        <p>Number</p>
        <p>Boolean</p>
        <p>Array</p>
        <p>Object</p>
        <p>Date</p>
        <p>Function</p>
        <p>Symbol</p>
        <h2>prop 為必要時</h2>
        <p>required 屬性</p>
        <h2>example</h2>
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
    </div>
</template>

<script>
export default {
    //接收父的值
    //1.
    // props: [
    //     'text1', 
    //     'text2'
    // ],

    //2.
    // props: {
    //     text1: String,
    //     text2: String
    // },

    //3.
    props: {
        text1: {
            type: String,
            required: true
        },
        text2: {
            type: String,
        },
    }
}
</script>
