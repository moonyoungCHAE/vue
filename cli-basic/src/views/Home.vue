
<template>
    <div>
        <h1> This is Home </h1>
        <!--자식 컴포넌트에서 발생한 @update-name event 발생하면 updateName 메서드가 호출된다.-->
        <InputField :name="name" @update-name="updateName"> </InputField>
        {{name}}
        <button> Submit </button>
    </div>
</template>

<script>
    import InputField from "../components/InputField";

    export default {
        components: {InputField},
        comments: {
            InputField
        },
        data() {
            return {
                name: 'Tommy Tommy'
            }
        },
        methods: {
            updateName(name) {
                this.name = name;
            }
        }
    }
</script>

<!-- scoped 안쓰면 모든 애플리케이션에 적용된다. -->
<style scoped>
    h1 {
        color: red;
    }
</style>