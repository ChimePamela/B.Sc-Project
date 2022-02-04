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
]

export default routes;


