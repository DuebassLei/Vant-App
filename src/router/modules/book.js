export default [
    {
        path:'/book/detail/:id',
        name:'bookDetail',
        component: ()=>import('@/components/book/BookDetail'),
        // meta:{
        //   requireAuth: true
        // },
    },
];
