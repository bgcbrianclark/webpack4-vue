<template lang="html">
  <div class="full-width center-content">
    <hello-component name="World"></hello-component>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="css" scoped>

</style>
