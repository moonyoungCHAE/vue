<template>
    <div>
        <h1> {{ title }}</h1>
        <p> {{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
    export default {
        // 부모 컴포넌트 (이 컴포넌트 사용하면 컴포너트)에서 props 데이터를 수정하면 안된다.
        // props: ['title'],
        props: {
            title: {
                type: String,
                required: false,
                default: 'default title'
            }
        },
        data () {
            return {
                name: 'Tommy'
            }
        },
        methods: {
            updateName() {
                this.name = 'Tommy Updated'
            }
        }
    }
</script>

<style scoped>

</style>