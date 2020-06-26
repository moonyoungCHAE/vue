<template>
    <div>
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo"></Todo>
    </div>
</template>

<script>
    import Todo from "./Todo";

    export default {
        components: {
            Todo
        },
        computed: {
            todos() {
                return this.$store.state.todos;
            }
        }
    }

</script>