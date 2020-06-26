<template>
    <div id="app" class="container">
        <h1 class="text-center">Todo App</h1>
        <hr>
        <CompletedTodo></CompletedTodo>
        <InputField @addTodo="addTodo"></InputField>
        <hr>
        <TodoList
                  @toggleCheckbox="toggleCheckbox"
                  @deleteCheckbox="deleteCheckbox"></TodoList>
    </div>
</template>

<script>
    import InputField from "./components/InputField";
    import TodoList from "./components/TodoList";
    import CompletedTodo from "./components/CompletedTodo";

    export default {
        components: {
            InputField,
            TodoList,
            CompletedTodo
        },
        data() {
            return {
                todoInput: ''
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
            addTodo(input) {
                this.todos.push({
                    id: Math.random(),
                    text: input,
                    checked: false
                })
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