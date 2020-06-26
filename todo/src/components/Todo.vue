<template>
    <div>
        <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
        <span class="m1-3" :style="todo.checked ? 'text-decoration: line-through' : ''">
        {{ todo.text}}
        </span>
        <button @click="deleteBox(todo.id)">DELETE</button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleCheckbox(e) {
                this.$store.commit('TOGGLE_TODO', {
                    id: this.todo.id,
                    checked: e.target.checked
                });
            },
            deleteBox(id) {
                this.$store.commit('DELETE_TODO', id);
            }
        }
    }
</script>