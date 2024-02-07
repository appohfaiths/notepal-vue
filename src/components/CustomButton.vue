<script setup lang="ts">
import type {CustomButtonProps} from '@/types';

defineProps<CustomButtonProps>();
</script>

<template>
  <button class="button" @click="buttonAction($event)">
    <slot></slot>
  </button>
</template>

<style scoped></style>