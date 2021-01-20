import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import base from "@/store/modules/base";
import bookCategory from "@/store/modules/bookCategory";
const store = new Vuex.Store({
    modules:{
        base,
        bookCategory
    },

});
export default store;
