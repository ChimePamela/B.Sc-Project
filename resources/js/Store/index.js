import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        books: {
            topRated: [],
            latest: [],
            featured: null
        },
        user: {
            profile: null
        },
        isLoggedIn: false
    },
    mutations: {
        SET_TOP_RATED(state, payload) {
            state.books.topRated = payload
        },
        SET_FEATURED(state, payload) {
            state.books.featured = payload
        },
        SET_LATEST(state, payload) {
            state.books.latest = payload
        },
        SET_LOGIN_DATA(state, payload) {
            state.user.profile = payload
        },
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
        }
    }
})

export default store;
