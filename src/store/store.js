import {createStore} from 'vuex'

const store = createStore({
    state: {
        counter: 0
    },
    mutations: {
        INCREMENT_COUNT(state) {
            state.counter++
        }
    }
})

export default store