import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        books: {
            topRated: [],
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
        SET_LOGIN_DATA(state, payload) {
            state.user.profile = payload
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
        getTopRated({ commit }) {
            return axios.get("/app/top-rated")
                .then(({ data }) => {
                    commit('SET_TOP_RATED', data.data);
                    return data.data;
                });
        }
    }
})

export default store;
