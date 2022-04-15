//home 小倉庫
const state={
    b:1
};
const getters={};
const mutations={
    serchAdd(state){
        //修改state
        state.b++;
    }
};
const actions={
    serch_add({commit}){
        //呼叫mutations
        commit('serchAdd')
    }
};
export default {
    state,
    getters,
    mutations,
    actions
}