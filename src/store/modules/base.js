import {SET_TOKEN,SET_USERINFO,SET_SHOW} from "@/store/types";

const state={
    token: '',
    userInfo: {},
    isShow: false
  };

const getters = {
};

const mutations = {
    [SET_TOKEN](state, payload) {
      state.token = payload
    },
    [SET_USERINFO](state, payload) {
      state.userInfo = payload
    },
    [SET_SHOW](state,payload){
      state.isShow = payload
    }
  };

const actions = {
  setToken({commit,state},payload){
    commit(SET_TOKEN,payload)
  }

};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
