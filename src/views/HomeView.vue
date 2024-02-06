<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';

const store = useNotesStore();
const { notes } = storeToRefs(store);
const { $reset, getNotes } = store;
// store.$patch({
//   notes: [
//     { id: 1, text: 'Learn Vue 3' },
//     { id: 2, text: 'Learn Pinia' },
//     { id: 3, text: 'Build a project' },
//   ],
// });

</script>

<template>
  <main>
    <h1>Home</h1>
    <ul>
      <li v-for="note in notes" :key="note.note_id" >
        {{ note.title }}
      </li>
    </ul>
    <button @click="getNotes">Get notes</button>
    <button @click="$reset">Clear notes</button>
  </main>
</template>
