<template>
    <div id="app" class="container">
        <h1 class="text-center">Todo App</h1>
        <hr>
        <CompletedTodo />
        <InputField />
        <hr>
        <TodoList/>
        <UserList/>
    </div>
</template>

<script>
    import InputField from "./components/InputField";
    import TodoList from "./components/TodoList";
    import CompletedTodo from "./components/CompletedTodo";
    import UserList from "./components/UserList";

    export default {
        components: {
            InputField,
            TodoList,
            CompletedTodo,
            UserList
        },
        data() {
            return {
                todoInput: ''
            }
        }
    }
</script>