export default [
    {
        path:'/story',
        name:'story',
        component: ()=>import('@/components/story/StoryGirl'),
        // meta:{
        //   requireAuth: true
        // },
    },
];
