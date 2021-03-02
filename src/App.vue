<template>
  <div><Header /></div>
  <Main />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

@Options({
  components: { Header, Main }
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
