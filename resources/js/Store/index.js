import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        books: {
            all: [],
            topRated: [],
            latest: [],
            featured: null
        },
        categories: [],
        authors: [],
        wishlist: [],
        user: {
            profile: JSON.parse(localStorage.getItem('user')) || null
        },
        isLoggedIn: !!localStorage.getItem('user') || false
    },
    mutations: {
        SET_ALL_BOOKS(state, payload) {
            state.books.all = payload;
        },
        SET_AUTHORS(state, payload) {
            state.authors = payload;
        },
        SET_TOP_RATED(state, payload) {
            state.books.topRated = payload
        },
        SET_FEATURED(state, payload) {
            state.books.featured = payload
        },
        SET_WISHLIST(state, payload) {
            state.wishlist = payload;
        },
        SET_LATEST(state, payload) {
            state.books.latest = payload
        },
        SET_CATEGORIES(state, payload) {
            state.categories = payload
        },
        SET_LOGIN_DATA(state, payload) {
            state.user.profile = payload
            state.isLoggedIn = true
            localStorage.setItem('user', JSON.stringify(payload))
        },
        SET_LOGOUT(state) {
            state.user.profile = null
            state.isLoggedIn = false
            localStorage.removeItem('user')
        }
    },
    actions: {
        register(_, payload) {
            return axios.post('/auth/register', payload)
                .then((res) => res.data);
        },
        login({ commit }, payload) {
            return axios.post('/auth/login', payload)
                .then(({ data }) => {
                    commit('SET_LOGIN_DATA', data.data)
                    return data.data
                });
        },
        logout({ commit }) {
            return axios.post('/auth/logout')
                .then(({ data }) => {
                    commit('SET_LOGOUT')
                })
        },
        getAuthors({ commit }) {
            return axios.get('/app/authors')
                .then(({ data }) => {
                    commit('SET_AUTHORS', data.data)
                    return data.data
                })
        },
        getAllBooks({ commit }) {
            return axios.get('/app/all-books')
                .then(({ data }) => {
                    commit('SET_ALL_BOOKS', data.data)
                    return data.data
                })
        },
        getCategories({ commit }) {
            return axios.get('/app/categories')
                .then(({ data }) => {
                    commit('SET_CATEGORIES', data.data)
                    return data.data;
                })
        },
        getTopRated({ commit }) {
            return axios.get("/app/top-rated")
                .then(({ data }) => {
                    commit('SET_TOP_RATED', data.data);
                    return data.data;
                });
        },
        getFeatured({ commit }) {
            return axios.get('/app/featured')
                .then(({ data }) => {
                    commit('SET_FEATURED', data.data)
                    return data.data;
                })
        },
        getLatest({ commit }) {
            return axios.get('/app/latest')
                .then(({ data }) => {
                    commit('SET_LATEST', data.data)
                    return data.data;
                })
        },
        addToWishlist(_, payload) {
            return axios.post('/app/wishlist/add', { book_id: payload.id })
                .then(({ data }) => {
                    return data.data
                });
        },
        getWishlist({ commit }) {
            return axios.get('/app/wishlist/all')
                .then(({ data }) => {
                    commit('SET_WISHLIST', data.data)
                    return data.data;
                })
        },
        removeFromWishlist(_, payload) {
            return axios.delete(`/app/wishlist/${payload.id}`)
                .then(({ data }) => {
                    return data.data
                })
        },
        reviewBook(_, payload) {
            return axios.post(`/app/review/${payload.id}`, {
                rating: payload.rating,
                comment: payload.comment
            }).then(({ data }) => {
                return data
            })
        }
    }
})

export default store;
