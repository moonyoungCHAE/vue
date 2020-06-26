<template>
    <div>
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo"
              @toggleCheckbox="toggleCheckbox"
              @deleteCheckbox="deleteCheckbox"></Todo>
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
        },
        methods: {
            toggleCheckbox(param) {
                this.$emit('toggleCheckbox', param);
            },
            deleteCheckbox(param) {
                this.$emit('deleteCheckbox', param);
            }
        }
    }

</script>