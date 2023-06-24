import { createStore } from "vuex";

export default createStore({
    state:{
        items: [
            {
                id: 1,
                image: '1.jpg',
                name: 'Header1',
                price: '100'
            },
            {
                id: 2,
                image: '2.jpg',
                name: 'Header3',
                price: '200'
            },
            {
                id: 3,
                image: '3.jpg',
                name: 'Header3',
                price: '300'
            },
            {
                id: 4,
                image: '4.jpg',
                name: 'Header4',
                price: '400'
            },
            {
                id: 5,
                image: '5.jpg',
                name: 'Header5',
                price: '500'
            },
        ]
    },
    mutations: {
        save_note (state, title) {
            state.notes.push(title)
        }
    }
})