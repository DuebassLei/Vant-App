import Dashboard from '@/views/base/Dashboard'
export default [
  {
    path:'/dashboard',
    name:'dashboard',
    component: Dashboard,
    // meta:{
    //   requireAuth: true
    // },
    children: [{
      path: '/dashboard',
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
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/base/Contacts'), // 使用懒加载
    meta: {
      name: '联系人',
      requireAuth: true,
    },
  },
];
