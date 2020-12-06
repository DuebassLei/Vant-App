import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import base from "@/store/modules/base";
const store = new Vuex.Store({
    modules:{
        base,
    },

});
export default store;
