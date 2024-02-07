<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import type { Note } from '@/types';

const store = useNotesStore();
const { deleteNote } = store;

const props = defineProps({
  note: {
    type: Object as () => Note,
    required: true,
  },
});
</script>

<template>
  <article>
    <h2>{{ note.title }}</h2>
    <p>{{ note.body }}</p>
    <button @click="deleteNote(note.note_id)">delete note</button>
  </article>

</template>

<style scoped></style>