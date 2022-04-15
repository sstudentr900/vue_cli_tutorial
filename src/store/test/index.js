//test 小倉庫
const state={
    count:1
};
const getters={};
const mutations={
    countAdd(state){
        //修改state
        state.count++;
    }
};
const actions={
    count_add({commit}){
        //呼叫mutations
        commit('countAdd')
    }
};
export default{
    // namespaced 在 dispatch 這個 actions 前面就要加上 module 的名稱
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}