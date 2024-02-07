<script setup lang="ts">
import { useRouter } from 'vue-router';
import NotesDisplay from '@/components/NotesDisplay.vue';
import CustomButton from '@/components/CustomButton.vue';

const router = useRouter();
</script>

<template>
  <main>
    <h1>Home</h1>
    <CustomButton :buttonAction="() => router.push({ name: 'create-note' })">Create Note</CustomButton>
    <NotesDisplay />
  </main>
</template>
