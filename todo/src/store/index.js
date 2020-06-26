import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 데이터가 들어가는 곳
        todos: [
            {id: 1, text: 'buy a car', checked: false},
            {id: 2, text: 'buy a pants', checked: true},
        ],
        users: []
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
        },
        SET_USERS(state, users) {
            state.users = users;
        }
    },
    actions: {
        // 메서드가 들어가는 곳
        addTodo({commit}, value) {
            commit('ADD_TODO', value)
        },
        getUsers({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(
                res => {
                    commit('SET_USERS', res.data);
                }
            )
        }
    },
    getters: {
        // computed와 비슷한 역할 ~ store에 저장한 값 computed 처리하고 싶을 때 ?
        // 캐싱 된다.
        numberOfCompletedTodo: state => {
                return state.todos.filter(todo => todo.checked === true).length;
            }
        }
});