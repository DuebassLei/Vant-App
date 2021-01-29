/**
 * 排行榜信息
 * */
import {SET_BOOK_RANKING, SET_BOOK_CATEGORY_DETAIL} from "@/store/types";

import bookApi from "@/api/book";

const state={
    //书籍排行榜
    bookRankingData: {},
    //书籍排行榜-单一排行榜
    bookRankingDetail:{},
    isShow: false
};

const getters = {
    getBookRanking(state){
        return state.bookRankingData;
    },
    getBookRankingDetail(state){
        return state.bookRankingDetail;
    }
};

const mutations = {
    [SET_BOOK_RANKING](state, payload) {
        state.bookRankingData = payload
    },
    [SET_BOOK_CATEGORY_DETAIL](state, payload) {
        state.bookRankingDetail = payload
    },
};

const actions = {
    setBookRanking({commit,state},payload){
        bookApi.fetchBookRanking(null,reply=>{
            commit(SET_BOOK_RANKING,reply)
        })
    },
    setBookRankingDetail({commit,state},payload){
        bookApi.fetchBookRankingById(payload,reply=>{
            commit(SET_BOOK_CATEGORY_DETAIL,reply.ranking)
        })
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
