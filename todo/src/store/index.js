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
    },
    actions: {
        // 메서드가 들어가는 곳
    },
    getters: {
        // computed와 비슷한 역할
    }
});