<!--
  Single File Component 구성
    1) template : html code
    2) script : data, method etc
    3) style : html style
-->
<template>
    <div>
        <h1>Tommy Tommy</h1>
        <p> {{ name }}</p>
        <tommy title="home title"></tommy>
    </div>
</template>

<script>
    import Tommy from "../components/Tommy";

    export default {
        components: {Tommy},
        comments: {
            Tommy
        },
        data() {
            return {
                name: 'Tommy Tommy'
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