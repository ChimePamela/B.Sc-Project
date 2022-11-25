const routes = [
  {
    path: '',
    component: () => import('../Pages/ExploreBooks.vue'),
    name: 'explore'
  },
  {
    path: '/about',
    component: () => import('../Pages/About.vue'),
    name: 'about'
  },
    {
        path: '/auth',
        component: () => import('../Pages/Auth.vue'),
        name: 'auth'
    },
]

export default routes;


