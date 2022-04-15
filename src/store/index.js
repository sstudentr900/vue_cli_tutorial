import { createStore } from 'vuex'
import test from "./test";
import serch from "./serch";
export default createStore({
    state: {
        bookList:'',
        // count:1
    },
    getters: {
        bookList: (state) => state.bookList,
    },
    mutations: {
        bookList(state, books) {
            // console.log(books)
            state.bookList = books;
        },
        // countAdd(state){
        //     //修改state
        //     state.count++;
        // }
    },
    actions: {
        fetchBookList (context) {
            context.commit('bookList', 'books') 
        },
        // count_add({commit}){
        //     //呼叫mutations
        //     commit('countAdd')
        // }
    },
    modules: {
        test,
        serch
    }
})
