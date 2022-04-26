<template>
    <div>
        <h2>父傳子 props</h2>
        <pre>
            //父 template
            //enterName1內層引用名子="外層的值"
            //: v-bind 綁定
            //childName1內層引用名子,parentName1外層引用的名子
            propHtml enterName1="All" :childName1="parentName1"
        </pre>
        <p>接收方式可使用以下型別</p>
        <p>String,Number,Boolean,Array,Object,Date,Function,Symbol</p>
        <pre>
            //子 script
            export default {
                //接收父的值方法1.
                props: [
                    'childName1', 
                    'enterName1'
                ],

                //接收父的值方法2.
                props: {
                    childName1: String,
                    enterName1: String
                },

                //接收父的值方法3.
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
        </pre>
        <propHtml enterName1="All" :childName1="parentName1" />

        <h2>子傳父 $emit</h2>
        <pre>
            //父 template
            //@ v-on 監聽事件
            emitHtml @childName2="parentName2"
        </pre>
        <pre>
            //子 template
            //1.使用$emit 傳給父元件
            @input="$emit('childName2', $event.target.value)" 

            //2.使用 setup
            @change='customChange'
            
            //3.使用methods
            @change='searchBook'

            //子 script
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
        </pre>
        <emitHtml @childName2="parentName2" @childName3="parentName3" @childName4="parentName4"/>

        <h2>範例1.method接收</h2>
        <emitHtml2 :childName5="parentName5" @childName6="parentName6"/>

        <h2>範例2.$emit</h2>
        <emitHtml2 :childName5="parentName5" @childName6="value=> parentName5=value"/>

        <h2>v-model 與元件的雙向綁定 (Vue 3.x 新增)</h2>
        <pre>
            //父 template
            //message 內層引用名子 parentName7外層引用的名子
            emitHtml3 v-model:message="parentName7"

            //子 template
            button @click="clickFn"

            //子 script
            export default {
                props: ['message'],
                methods: {
                    clickFn(){
                        this.$emit("update:message",'childValue')
                    }
                },
            }
        </pre>
        <emitHtml3 v-model:message="parentName7"/>

        <h2>跨越層級的傳遞方式</h2>
        <p>傳遞出去的資料定義在 provide</p>
        <pre>
            //父 script
            import { inject, reactive, computed } from "vue";
            provide(){
                return {
                    //輸出的資料並不會與上層資料連動
                    provideMsg: this.parentName8,
                    //與上層資料連動，則需要透過 Vue.computed() 進行包裝
                    provideMsg2: computed(() => this.parentName8)
                }
            }

            //子 script
            export default {
                inject: ['provideMsg','provideMsg2'],
            }
        </pre>
        <input type="text" v-model="parentName8">
        <!-- <p>{{parentName8}}</p> -->
        <emitHtml4></emitHtml4>
        <br>
        <br>
        <a href="https://book.vue.tw/CH2/2-2-communications.html">元件之間的溝通傳遞</a>
        <br>
        <a href="https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/vue3-%E7%9A%84%E8%B3%87%E6%96%99%E7%8B%80%E6%85%8B%E7%AE%A1%E7%90%86%EF%BC%8Cprovide-inject%E3%80%81vuex/">Vue3的資料狀態管理，provide / inject、vuex、props</a>
    </div>
</template>

<script>
import { provide,inject, reactive, computed } from "vue";
import emitHtml from '@/components/emitHtml.vue'
import propHtml from '@/components/propHtml.vue'
import emitHtml2 from '@/components/emitHtml2.vue'
import emitHtml3 from '@/components/emitHtml3.vue'
import emitHtml4 from '@/components/emitHtml4.vue'

export default {
    data() {
        return {
            parentName1:'parentName1',
            parentName5: 'parentValue',
            parentName7: 'Hello Vue!',
            parentName8: 'Hello Vue!'
        }
    },
    components:{
        propHtml,
        emitHtml,
        emitHtml2,
        emitHtml3,
        emitHtml4,
    },
    methods: {
        // 父元件監聽該事件名稱 searchText，獲得即時輸入的結果為 $event.target.value
        parentName2(date) {
            console.log('$emit',date)
        },
        parentName3(date) {
            console.log('setup',date)
        },
        parentName4(date) {
            console.log('methods',date)
        },
        parentName6(date){
            this.parentName5 = date
        },
    },
    // setup(){
    //     //setup只能访问以下 property：
    //     //props,attrs,slots,emit
    //     provide("provideMsg", "James");
    // },
    provide(){
        return {
            //輸出的資料並不會與上層資料連動
            provideMsg: this.parentName8,
            //與上層資料連動，則需要透過 Vue.computed() 進行包裝
            provideMsg2: computed(() => this.parentName8)
        }
    }
}
</script>
