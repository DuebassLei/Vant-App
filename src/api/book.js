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
        axios.get(`${base.bookApi}/categories`).then(reply=>{
            call(reply.data)
        });
    },
    //获取某一分类书记列表
    fetchCategoryDetail(param,call) {
        axios.get(`${base.bookApi}/category-info`,{
            params:param
        }).then(reply=>{
            call(reply.data)
        });
    },
    //获取书籍详情
    fetchBookDetail(param){
        return axios(`${base.bookApi}/book-info/${param}`)
    },
    //书籍短评
    fetchBookReviews(param){
        return axios(`${base.bookApi}/book/short-reviews?book=${param}`)
    }
}

export default book;
