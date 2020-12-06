import Vue from 'vue';
import Router from 'vue-router';
import { read } from '@/utils/storage';
//为了首屏加载快，所以首页不使用懒加载
import Home from '@/views/base/Home';
Vue.use(Router);

const originalPush = Router.prototype.push;

// 处理路由跳转会报错的问题
Router.prototype.push = function push(...rest) {
  return originalPush.apply(this, rest).catch((err) => err);
};

// 自动扫描 modules 里面的路由模块，路由模块请根据业务自行拆分
const files = require.context('./modules', false, /\.js$/);

const routes = [];
// 获取所有的路由内容
files.keys().forEach((key) => {
  const file = files(key).default;
  // 根据导出的内容判断是否数组，如果数组需使用扩展运算符
  if (Array.isArray(file)) {
    routes.push(...file);
  } else {
    routes.push(file);
  }
});

routes.push(
  ...[
    {
      path: '/',
      redirect: '/dashboard',
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '*',
      component: () => import('@/views/error/Error404'),
      meta: {
        keepAlive: true,
      },
    },
  ]
);
//warning️: 二级路由不需要加
const router = new Router({
  mode: 'history',
  routes,
  // 页面滚动行为
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  /* 页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  /* 判断该路由是否需要登录权限 */
  if (to.matched.some((v) => v.meta.requireAuth)) {
    //是否登录
    const token = read('token');
    if (!token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath, // 将跳转的路由path作为参数，登录成功后跳转到该路由
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
