<template>
  <div class="title">
    <div class="title__logo">
      <img src="../assets/images/logo-mastercraft.svg" alt="title logo" />
    </div>
    <div class="title__content">
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <span>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</span>
    </div>
    <div class="title__footer">
      <Button>Back this proyect</Button>
      <div class="title__footer_bookmark">
        <img src="../assets/images/icon-bookmark.svg" alt="bookmark" />
        <button class="title__bookmark_btn"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Button from './Button.vue'

@Options({ components: { Button } })
export default class Title extends Vue {}
</script>

<style scoped>
.title {
  width: 100%;
  height: 250px;
  margin-top: -100px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
}
.title__logo {
  display: flex;
  justify-content: center;
}
.title__logo > img {
  margin-top: -28px;
}
.title__content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.title__content > span {
  color: #7a7a7a;
}
.title__footer {
  display: flex;
  justify-content: space-between;
  padding: 0px 48px;
}
.title__bookmark_btn {
  min-width: 158px;
  height: 56px;
  border: 0px;
  border-radius: 25px;
  z-index: 0;
}
.title__footer_bookmark > img {
  margin-right: -28px;
  z-index: 100;
}
</style>
