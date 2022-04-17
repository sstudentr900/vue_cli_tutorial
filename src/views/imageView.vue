<template>
    <div>
        <h2>images</h2>
        <pre>
            //assets 基本寫法
            img src="@/assets/home.png"
            img src="../../assets/home.png"

            //assets require 帶入值
            img :src="require(`@/assets/${image}.svg`)"

        </pre>
        <br>
        <br>
        <hr>
        <a href="https://stackoverflow.com/questions/47313165/how-to-reference-static-assets-within-vue-javascript">vue assets</a>
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
    },
}
</script>
