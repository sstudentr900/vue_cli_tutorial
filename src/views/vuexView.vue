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
                    //網路不給力[] 先給空數據才不會undefined
                    bookList: (state) => state.bookList || [],
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
        
        <h2>路由 beforeEnter 發送 API：將導覽項目路由規劃成巢狀結構，直接在父層路由發送 API。</h2>
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

        <h2>mapState 取得State裡的值</h2>
        <pre>
            //script 引入
            import {mapState} from "vuex";

            //computed 使用 count是State裡的值
            ...mapState(["count"])
        </pre>

        <h2>取到state</h2>
        <pre>
            computed: {
                //1.
                count() {
                    return this.$store.state.test.count;
                },

                //2.
                ...mapState({
                    count: state => state.test.count,
                }),

                //3.
                ...mapState('test',{
                    count: state => state.count,
                }),

                //4.
                ...mapState('test',["count"]),
            },
        </pre>

        <h2>getters對state優化取值</h2>
        <pre>
        computed: {
            books() {
                return this.$store.getters["bookList"];
            },
            //他沒有組('test')可以區分直接取值
            ...mapGetters(['bookList'])
        },
        </pre>
        <p>{{books}}</p>

        <h2>active 改變值</h2>
        <p>{{count}}</p>
        <button @click='count_add'>add</button>
        <br>
        <br>
        <hr>
        <a href="https://www.youtube.com/watch?v=0rr2EtM44bA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=18"> vuex模块式开发</a>
        <a href="https://medium.com/itsems-frontend/vue-vuex4-modules-ddb3eec6b834"> Vuex 是什麼</a>
    </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";
export default {
    mounted(){
        this.$store.dispatch("fetchBookList");
    },
    computed: {
        books() {
            console.log('books')
            //大倉
            return this.$store.getters["bookList"];
        },

        //取得小倉home
        // count() {
        //     return this.$store.state.test.count;
        // },
        // ...mapState({
        //     count: state => state.test.count,
        // }),
        // ...mapState('test',{
        //     count: state => state.count,
        // }),
        ...mapState('test',["count"]),

        //
        ...mapGetters(['bookList'])
    },
    methods:{
        count_add(){
            //呼叫 home active
            this.$store.dispatch("test/count_add");
        },
    }
}
</script>
