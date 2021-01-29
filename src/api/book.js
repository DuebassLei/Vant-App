/**
 * @description: hse 模块接口
 * @author Gao Lei
 * @date 11/27/20
 */
import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例


const book = {
    //获取带书籍数量的父分类
    fetchCategory(param,call) {
        // axios.get(`${base.bookApi}/categories`).then(reply=>{
        axios.get(`${base.bookApi}/cats/lv2/statistics`).then(reply=>{
            call(reply.data)
        }).catch(e=>{
            this.$notify({ type: 'warning', message: e });
        })
    },
    //获取某一分类书籍列表
    fetchCategoryDetail(param,call) {
        // axios.get(`${base.bookApi}/category-info`,{
        axios.get(`${base.bookApi}/book/by-categories`,{
            params:param
        }).then(reply=>{
            call(reply.data)
        }).catch(e=>{
            this.$notify({ type: 'warning', message: e });
        })
    },
    //获取书籍详情
    fetchBookDetail(param){
        // return axios(`${base.bookApi}/book-info/${param}`)
        return axios(`${base.bookApi}/book/${param}`)
    },
    //书籍短评
    fetchBookReviews(param){
        // return axios(`${base.bookApi}/book/short-reviews?book=${param}`)
        return axios(`${base.bookApi}/post/review/by-book?book=${param}&sort=updated&start=0&limit=30?
`)

    },
    //书籍章节信息
    fetchBookChapter(param) {
        return axios(`${base.bookApi}/mix-atoc/${param}?view=chapters`)
    },
    //获取所有排行榜
    fetchBookRanking(param,call){
        let vm = this;
         axios(`${base.bookApi}/ranking/gender`).then(reply=>{
             call(reply.data)
         }).catch(e=>{
             // vm.$notify({ type: 'warning', message: e });
             console.log(e)
         })
    },
    //获取单一排行榜
    fetchBookRankingById(param,call){

         axios(`${base.bookApi}/ranking/${param}`).then(reply=>{
             call(reply.data)
         }).catch(e=>{
             this.$notify({ type: 'warning', message: e });
         })
    }
}

export default book;
