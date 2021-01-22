export default [
    {
        path:'/book/detail/:id',
        name:'bookDetail',
        component: ()=>import('@/components/book/BookDetail'),
        // meta:{
        //   requireAuth: true
        // },
    },
    {
        path:'/book/read/:id',
        name:'bookRead',
        component: ()=>import('@/components/book/BookRead'),
        // meta:{
        //   requireAuth: true
        // },
    },

];
