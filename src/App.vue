<template>
  <div><Header /></div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Header from './components/Header.vue'

@Options({
  components: { Header }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Commissioner', sans-serif;
}
body {
  margin: 0px;
}
</style>
