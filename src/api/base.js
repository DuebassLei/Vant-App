/**
 * @description: 接口配置(多接口情况处理)
 * @author Gao Lei
 * @date 11/27/20
*/
const isPro = Object.is(process.env.NODE_ENV, 'production')
const base = {
  // bookApi: isPro ? 'http://novel.kele8.cn/' : '/book',
  bookApi: isPro ? 'http://api.zhuishushenqi.com/' : '/proxy',
  bookCoverApi: 'http://statics.zhuishushenqi.com',
  bookChapterApi: 'http://chapter2.zhuishushenqi.com'
};

export default base;
