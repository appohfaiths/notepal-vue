<script setup lang="ts">
import type { Note } from '@/types';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClick = (note_id: string) => {
    router.push({ name: 'view-note', params: { id: note_id } })
}

defineProps({
  note: {
    type: Object as () => Note,
    required: true,
  },
});
</script>

<template>
  <article class="note" @click="handleClick(note.note_id)">
    <h2>{{ note.title }}</h2>
    <p>{{ note.body }}</p>
  </article>

</template>

<style scoped>
.note {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
}
</style>