<script setup lang="ts">

const props = defineProps({
  buttonAction: {
    type: function() {
      return Function as () => void;
    },
    required: true,
  },
});
</script>

<template>
  <button class="button" @click="buttonAction">
    <slot></slot>
  </button>
</template>

<style scoped></style>