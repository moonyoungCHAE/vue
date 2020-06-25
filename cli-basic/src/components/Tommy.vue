<template>
    <div>
        <p> header </p>
        <slot name="header" :slotName="name"> <!-- slot 안에 데이터를 Instance에 해당 Component의 데이터를 넘겨준다. -->
        </slot> <!-- HTML Tag를 넣고 싶은 곳에 slot을 넣어준다 -->
        <p> body </p>
        <slot name="body"></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
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