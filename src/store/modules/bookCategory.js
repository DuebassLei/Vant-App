/**
 * 书籍分类信息
 * */
import {SET_BOOK_CATEGORY, SET_BOOK_CATEGORY_DETAIL} from "@/store/types";

import bookApi from "@/api/book";

const state={
    //书籍分类列表
    bookCategoryData: {},
    //书籍某一分类列表
    bookCategoryDetail:{},
    isShow: false
};

const getters = {
    getBookCategory(state){
        return state.bookCategoryData;
    },
    getBookCategoryDetail(state){
        return state.bookCategoryDetail;
    }
};

const mutations = {
    [SET_BOOK_CATEGORY](state, payload) {
        state.bookCategoryData = payload
    },
    [SET_BOOK_CATEGORY_DETAIL](state, payload) {
        state.bookCategoryDetail = payload
    },
};

const actions = {
    setBookCategory({commit,state},payload){
        bookApi.fetchCategory(null,reply=>{
            commit(SET_BOOK_CATEGORY,reply)
        })
        // return new Promise((resolve, reject) => {
        //     bookApi.fetchCategory(null,reply=>{
        //         commit(SET_BOOK_CATEGORY,reply)
        //     })
        // })
    },
    setBookCategoryDetail({commit,state},payload){
        bookApi.fetchCategoryDetail(payload,reply=>{
            commit(SET_BOOK_CATEGORY_DETAIL,reply)
        })
        // return new Promise((resolve, reject) => {
        //     bookApi.fetchCategory(null,reply=>{
        //         commit(SET_BOOK_CATEGORY,reply)
        //     })
        // })
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
