import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state:{
        items: [],
        cart: []
    },
    mutations: {
        SET_ITEMS: (state, items) => {
            state.items =items
        },
        SET_CART(state, item) {
            state.cart.push(item)
        }
    },
    actions: {
        async GET_ITEMS({commit}) {
            try {
                const items = await axios('http://localhost:3000/items', {
                    method: "GET"
                });
                commit('SET_ITEMS', items.data);
                return items;
            } catch (err) {
                console.log(err);
                return err;
            }
        },
        ADD_TO_CART({commit}, item) {
            commit('SET_CART', item)
        }
    },
    getters: {
        ITEMS(state) {
            return state.items;
        },
        CART(state) {
            return state.cart
        }
    }
})