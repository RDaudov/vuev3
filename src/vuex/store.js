import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state:{
        items: []
    },
    mutations: {
        SET_ITEMS: (state, items) => {
            state.items =items
        }
    },
    actions: {
        GET_ITEMS({commit}) {
            return axios('http://localhost:3000/items', {
            method: "GET"
            })
            .then((items) => {
                commit('SET_ITEMS', items.data)
                return items;
            })
            .catch((err) => {
                console.log(err);
                return err
            })
        }
    },
    getters: {
        ITEMS(state) {
            return state.items;
        }
    }
})