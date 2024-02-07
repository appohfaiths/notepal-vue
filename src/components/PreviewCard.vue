<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import type { Note } from '@/types';
import { useRouter } from 'vue-router';

const store = useNotesStore();
const { deleteNote } = store;
const router = useRouter();

const handleClick = (note_id: string) => {
    router.push({ name: 'view-note', params: { id: note_id } })
}

const props = defineProps({
  note: {
    type: Object as () => Note,
    required: true,
  },
});
</script>

<template>
  <article @click="handleClick(note.note_id)">
    <h2>{{ note.title }}</h2>
    <p>{{ note.body }}</p>
    <button @click="deleteNote(note.note_id)">delete note</button>
  </article>

</template>

<style scoped></style>