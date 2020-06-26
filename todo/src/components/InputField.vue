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
                // mutation 메서드 부를 때 - commit
                // actions 메서드 부를 때 = dispatch
                this.$store.dispatch('ADD_TODO', e.target.value);
                this.todoInput = ""
            }
        }
    }
</script>