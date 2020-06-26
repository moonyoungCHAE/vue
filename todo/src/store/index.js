import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 데이터가 들어가는 곳
        todos: [
            {id: 1, text: 'buy a car', checked: false},
            {id: 2, text: 'buy a pants', checked: true},
        ]
    },
    mutations: {
        // 데이터를 수정하는 곳
        ADD_TODO(state, input) {
            state.todos.push({
                id: Math.random(),
                text: input,
                checked: false
            })
        },
        TOGGLE_TODO(state, param) {
            const index = state.todos.findIndex(todo => {
                return todo.id === param.id;
            })
            state.todos[index].checked = param.checked
        },
        DELETE_TODO(state, id) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            })
            state.todos.slice(index, 1)
        }
    },
    actions: {
        // 메서드가 들어가는 곳
    },
    getters: {
        // computed와 비슷한 역할
    }
});