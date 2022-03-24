<template>
    <div>
        <h2>「@」v-on：監聽事件</h2>
        <p>{{ clicks }}</p>
        <button type="button" @click="clicks += 1">Click it!</button>
        <h2>「:」v-bind：綁定 attribute</h2>
        <p>disabled: {{ isUnclickable }}</p>
        <button type="button" :disabled="isUnclickable" @click="disabled">
            Cannot click!
        </button>
        <h2>:class</h2>
        <p :class="{color_red : is_class}">class</p>
        <button type="button" @click="is_class_fn">
            Cannot click!
        </button>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10268431">簡寫好用一直用－v-on、v-bind</a>
    </div>
</template>
<style>
    p.color_red{
        color: red;
    }
</style>
<script>
export default {
    data() {
        return {
            clicks: 0,
            isUnclickable: false,
            is_class: false
        };
    },
    methods: {
        counter() {
            this.clicks += 1;
            if (this.clicks % 50 === 0) {
                alert(`Already ${this.clicks} clicks.`);
            }
        },
        disabled(){
            this.isUnclickable=true
        },
        is_class_fn(){
            this.is_class = true
        }
    },
}
</script>
