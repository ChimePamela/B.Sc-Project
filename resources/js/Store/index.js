import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        books: {
            bestSelling: [],
        },
        user: {
            profile: null
        },
        isLoggedIn: false
    },
    mutations: {
        SET_BEST_SELLING(state, payload) {
            state.books.bestSelling = payload
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
        getBestSelling({ commit }) {
            return axios.get("/app/best-selling")
                .then(({ data }) => {
                    commit('SET_BEST_SELLING', data.data);
                    return data.data;
                });
        }
    }
})

export default store;
