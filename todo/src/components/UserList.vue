<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.getUsers()
        },
        // data 로 users 하면 변경 감지가 안된다.
        computed: {
            users() {
                return this.$store.state.users
            }
        },
        methods: {
            getUsers() {
                this.$store.dispatch('getUsers')
            }
        }

    }
</script>