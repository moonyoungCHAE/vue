<template>
    <input type="text" class="w-100 p-2" placeholder="입력하세요." v-model="todoInput" @keyup.enter="addTodo">
</template>

<script>
    export default {
        data () {
            return {
                todoInput: ''
            }
        },
        methods: {
            addTodo(e) {
                this.$emit("addTodo", e.target.value);
                this.todoInput = ''
            }
        }
    }
</script>