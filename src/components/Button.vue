<template>
  <button class="button" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass(): string {
      return this.disabled ? 'button__disabled' : 'button__active'
    }
  }
})
</script>

<style scoped>
.button {
  min-width: 158px;
  height: 56px;
  padding: 20px 32px;
  color: white;
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: 25px;
  cursor: pointer;
}
.button:focus {
  outline: none;
}
.button__active {
  background-color: #3cb4ac;
}
.button__disabled {
  background-color: #bdbdbd;
}
</style>
