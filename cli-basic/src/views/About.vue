<template>
  <div class="about">
    <h1>This is an about page</h1>
    <tommy title="About title"></tommy>
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