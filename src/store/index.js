import { createStore } from 'vuex'

export default createStore({
    state: {
        bookList:''
    },
    getters: {
        bookList: (state) => state.bookList,
    },
    mutations: {
        bookList(state, books) {
            // console.log(books)
            state.bookList = books;
        },
    },
    actions: {
        fetchBookList (context) {
            context.commit('bookList', 'books') 
        }
    },
    modules: {
    }
})
