import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import base from "@/store/modules/base";
import bookCategory from "@/store/modules/bookCategory";
import bookRanking from "@/store/modules/bookRanking";
const store = new Vuex.Store({
    modules:{
        base,
        bookCategory,
        bookRanking
    },

});
export default store;
