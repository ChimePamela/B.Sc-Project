const routes = [
    {
        path: '',
        component: () => import('../Pages/ExploreBooks.vue'),
        name: 'explore'
    },
    {
        path: '/books',
        component: () => import('../Pages/BookList.vue'),
        name: 'books'
    },
    {
        path: '/manage-books',
        component: () => import('../Pages/ManageBooks.vue'),
        name: 'manage-books'
    },
    {
        path: '/authors',
        component: () => import('../Pages/Authors.vue'),
        name: 'authors'
    },
    {
        path: '/wishlist',
        component: () => import('../Pages/Wishlist.vue'),
        name: 'wishlist'
    },
    {
        path: '/auth',
        component: () => import('../Pages/Auth.vue'),
        name: 'auth'
    },
]

export default routes;


