<template>
    <div>
        <p>@input事件是实时监控的，每次输入都会调用</p>
        <p>@keyup.enter需要点击回车键触发</p>
        <p>@change</p>
        <p>@blur</p>
        <hr>
        <p> 一般在元件內的input使用v-model</p>
        <input type="text" v-model="inputText" />
        <p>@input監聽表單元素的即時變化 </p>
        <input type="text" :value="inputText"  @input="inputText = $event.target.value" /> 
        <p> @change監聽值改變 </p>
        <input type="text" :value="inputText"  @change="inputText = $event.target.value" />
        <p>顯示輸入內容：{{ inputText }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputText: '55'
            }
        },
        computed: {},
    }
</script>