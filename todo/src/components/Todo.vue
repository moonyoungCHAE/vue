<template>
    <div>
        <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
        <span class="m1-3" :style="todo.checked ? 'text-decoration: line-through' : ''">
        {{ todo.text }}
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
                //  보내는 parameter { } 로 묶으면 Object로 전송된다.
                this.$emit('toggleCheckbox', {
                    id: this.todo.id,
                    checked: e.target.checked
                });
            },
            deleteBox(id) {
                this.$emit('deleteCheckbox', id)
            }
        }
    }
</script>