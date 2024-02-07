<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
import PreviewCard from './PreviewCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useNotesStore();
const { notes } = storeToRefs(store);
const { getNotes } = store;

onMounted(() => {
  getNotes()
})

watch(notes, (newNotes, notes) => {
  if (newNotes.length > (notes?.length ?? 0)) {
    getNotes()
  }
})
</script>

<template>
    <section class="display">
        <ul>
            <PreviewCard v-for="note in notes" :key="note.note_id" :note="note" />
        </ul>
    </section>
</template>

<style scoped>
.display {
  border: 1px solid red;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
}
</style>