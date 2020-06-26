<template>
    <div id="app" class="container">
        <h1 class="text-center">Todo App</h1>
        <input type="text" class="w-100 p-2" placeholder="입력하세요." v-model="todoInput" @keyup.enter="addTodo">
        <hr>
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo"
              @toggleCheckbox="toggleCheckbox"
              @deleteCheckbox="deleteCheckbox"></Todo>
    </div>
</template>

<script>
    import Todo from "./components/Todo";

    export default {
        components: {
            Todo
        },
        data() {
            return {
                todoInput: '',
                todos: [
                    {id: 1, text: 'buy a car', checked: false},
                    {id: 2, text: 'buy a pants', checked: true},
                ]
            }
        },
        methods: {
            // object의 멤버변수 분리되어 들어온다. 함수의 인자이름으로 받아온다.
            // toogleCheckbox(id, checked) -- 안되는데 ?? id에 object 들어온다.
            toggleCheckbox(param) {
                const index = this.todos.findIndex(todo => {
                    return todo.id === param.id;
                })
                this.todos[index].checked = param.checked;
            },
            addTodo(e) {
                this.todos.push({
                    id: Math.random(),
                    text: e.target.value,
                    checked: false
                })
                this.todoInput = "";
            },
            deleteCheckbox(id) {
                const index = this.todos.findIndex(todo => {
                    return todo.id === id;
                });
                this.$delete(this.todos, index)
            }
        }
    }
</script>