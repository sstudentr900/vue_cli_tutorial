<template>
    <div>
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
    </div>
</template>

<script>
export default {
    //接收父的值
    props: {
        text1: {
            type: String,
        },
        text2: {
            type: String,
        },
    }
}
</script>
