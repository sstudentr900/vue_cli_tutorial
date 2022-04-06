<template>
    <div>
        <h2>「@」v-on：監聽事件</h2>
        <p>stop 阻擋事件冒泡</p>
        <p>prevent 阻擋預設行為</p>
        <p>capture 以捕獲形式觸發事件</p>
        <p>passive 是告訴瀏覽器，我沒使用 preventDefault 阻擋預設行為</p>
        <p>self 只觸發元素自己的事件</p>
        <p>once 指定事件只觸發一次</p>
        <p>@click.once=""</p>
        <p>觸發事件時，要去呼叫 event.preventDefault()</p>
        <p>form v-on:submit.prevent="onSubmit"</p>
        <p>{{ clicks }}</p>
        <button type="button" @click="clicks += 1">Click it!</button>
        <br>
        <br>
        <button type="button" @click.once="clicks += 1">Click it!(只會被觸發一次)</button>
        <h2>「:」v-bind：綁定 attribute</h2>
        <p>disabled: {{ isUnclickable }}</p>
        <button type="button" :disabled="isUnclickable" @click="disabled">
            Cannot click!
        </button>
        <h2>綁定 class</h2>
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
