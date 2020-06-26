<template>
    <div>
        {{ completedTodos }}
    </div>
</template>

<script>
    export default {
        props: {
            todos: {
                type: Array
            }
        },
        computed: {
            completedTodos() {
                return this.todos.filter(todo => todo.checked === true).length;
            }
        }
    }
</script>