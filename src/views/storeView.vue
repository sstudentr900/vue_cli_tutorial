<template>
    <div>
        <h2>Vuex</h2>
        <img src="https://vuex.vuejs.org/vuex.png" alt="">
        <p>主要以四個核心概念——State、Getters、Mutations、Actions——所組成， Modules 可再進行模組化</p>
        <p>dispatch -> action 發送 API 從後端取得資料後，commit -> mutation</p>
        <p>mutation 改變 state，並且是唯一可以改變 state 的方法</p>
        <p>透過 getter 取得 state 資料，再到元件中引入 getter 並將資料渲染至畫面上</p>
        <pre>
            //store
            import { createStore } from 'vuex'
            export default createStore({
                state: {
                    bookList:''
                },
                getters: {
                    //透過 getters 取得 state 資料
                    bookList: (state) => state.bookList,
                },
                mutations: {
                    //mutation 將資料直送並賦值給 state
                    bookList(state, books) {
                        // console.log(books)
                        state.bookList = books;
                    },
                },
                actions: {
                    //action 發送 API 後將資料以 commit 呼叫 mutation
                    fetchBookList (context) {
                        const books = await GET();
                        context.commit('bookList', 'books') 
                    }
                },
                modules: {
                }
            })

            //在元件內的 computed 
            export default {
                mounted(){
                    //dispatch 呼叫 action
                    this.$store.dispatch("fetchBookList");
                },
                computed: {
                    books() {
                        //用 getters 取得 state 資料
                        return this.$store.getters["bookList"];
                    },
                },
            }
        </pre>
        <p>路由 beforeEnter 發送 API：將導覽項目路由規劃成巢狀結構，直接在父層路由發送 API。</p>
        <pre>
            {
                path: "/urlName",
                component: urlName,
                beforeEnter: async (to, from, next) => {
                    //dispatch 呼叫 action
                    await store.dispatch("fetchBookList");
                    next();
                },
            },
        </pre>
        <p>{{books}}</p>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch("fetchBookList");
    },
    computed: {
        books() {
            return this.$store.getters["bookList"];
        },
    },
}
</script>
