<template>
  <div class="main">
    <Title />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Title from './Title.vue'

@Options({ components: { Title } })
export default class Main extends Vue {}
</script>

<style scoped>
.main {
  position: relative;
  left: 25%;
  width: 50%;
}
</style>
