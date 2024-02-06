<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';

 const {notes} = useNotesStore();
</script>

<template>
  <main>
    <h1>Home</h1>
    <ul>
      <li v-for="note in notes" :key="note.id" >
        {{ note.text }}
      </li>
    </ul>
  </main>
</template>
