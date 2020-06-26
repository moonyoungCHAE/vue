<template>
    <div>
        {{ completedTodos }}
    </div>
</template>

<script>
    export default {
        computed: {
            todos() {
                // store에서 데이터 접근하는 방법
                // store에서 데이터 가져올 때에는 computed 안에 써준다.
                return this.$store.state.todos;
            },
            completedTodos() {
                return this.todos.filter(todo => todo.checked === true).length;
            }
        }
    }
</script>