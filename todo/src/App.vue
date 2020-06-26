<template>
    <div id="app" class="container">
        <h1 class="text-center">Todo App</h1>
        <hr>
        <CompletedTodo />
        <InputField />
        <hr>
        <TodoList/>
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
        }
    }
</script>