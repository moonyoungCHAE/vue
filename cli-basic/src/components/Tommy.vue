<template>
    <div>
        <p> {{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
    export default {
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