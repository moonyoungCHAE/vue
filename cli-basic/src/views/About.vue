<template>
  <div class="about">
    <h1>This is an about page</h1>
    <tommy title="About title">
      <!-- 해당 Component를 사용하는 Instance에서 slot에 들어갈 값을 넣어준다. -->
      <template #header="props">
        <!-- slotName을 slot-name응로 쓰니까 NaN으로 받는다.. ??? -->
        <p> header content {{ props.slotName}}</p>
      </template>
      <!-- v-slot === # -->
      <template #default> <!-- 이름 지정하지 않은 slot에 들어간다. -->
        hello
      </template>
    </tommy>
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