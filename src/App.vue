<template>
  <div id="app">
        <br>
        <Input />
        <router-view></router-view>

  </div>
</template>

<script>
import Input from './components/Input.vue'
export default {
  name: 'App',
  components: {
    Input
  }
}
</script>

<style>
</style>