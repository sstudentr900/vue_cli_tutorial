<template>
    <div>
        <p>範例: {{ childName1 }},{{ enterName1 }}</p>
    </div>
</template>

<script>
export default {
    //接收父的值
    //1.
    // props: [
    //     'childName1', 
    //     'enterName1'
    // ],

    //2.
    // props: {
    //     childName1: String,
    //     enterName1: String
    // },

    //3.
    props: {
        childName1: {
            type: String,
            required: true //為必要屬性
        },
        enterName1: {
            type: String,
        },
    }
}
</script>
