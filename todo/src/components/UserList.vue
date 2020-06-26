<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        created() {
            this.getUsers()
        },
        // data 로 users 하면 변경 감지가 안된다.
        computed: {
            // users() {
            //     return this.$store.state.users
            // },
            // todos() {
            //     return this.$store.state.todos;
            // },

            // 위에를 다음과 같이 줄일 수 있다. Map Helper
            ...mapState([
                'users', {'name':'todos'}
            ])
        },
        methods: {
            // getUsers() {
            //     this.$store.dispatch('getUsers')
            // }
            ...mapActions(['getUsers'])
        }

    }
</script>