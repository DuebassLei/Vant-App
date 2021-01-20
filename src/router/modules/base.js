import Dashboard from '@/views/base/Dashboard'
export default [
  {
    path:'/dashboard',
    name:'dashboard',
    component: Dashboard,
    // meta:{
    //   requireAuth: true
    // },
    children: [
    {
      path: '/',
      redirect: '/dashboard/home',
      meta: {
        keepAlive: true
      }
    },
      {
        path: 'home',
        name: 'home',
        component: ()=>import('@/views/base/Home'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/base/Contacts'), // 使用懒加载
        meta: {
          name: '联系人',
          requireAuth: true,
        },
      },
      {
        path: 'bookshelf',
        name: 'bookshelf',
        component: () => import('@/views/base/BookShelf'), // 使用懒加载
        meta: {
          name: '书架',
          requireAuth: false,
        },
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/base/Category'), // 使用懒加载
        meta: {
          name: '分类',
          requireAuth: false,
        },
      },


      {
        path: 'echart',
        name: 'echart',
        component: () => import('@/views/base/Echart'), // 使用懒加载
        meta: {
          name: '在线作图',
          // requireAuth: true,
        },
      },
    ]
  },
];
