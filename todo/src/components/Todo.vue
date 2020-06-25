<template>
    <div>
        <input type="checkbox" :checked="todo.checked">
        <span class="m1-3"> {{ todo.text}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>