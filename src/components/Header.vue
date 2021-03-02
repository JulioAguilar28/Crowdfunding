<template>
  <header class="header">
    <img class="header__bg" src="../assets/images/logo.svg" alt="logo" />
    <nav>
      <ul class="header__list">
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 50px 100px 0px 170px;
  background-image: url('../assets/images/image-hero-desktop.jpg');
  background-repeat: no-repeat;
  min-height: 350px;
}
.header__bg {
  height: 20px;
  cursor: pointer;
}
.header__list {
  display: flex;
  justify-content: space-between;
}
.header__list > li {
  list-style: none;
  font-size: 16px;
  margin-right: 42px;
  cursor: pointer;
  color: white;
}
</style>
