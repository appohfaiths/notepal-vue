<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import PreviewCard from './PreviewCard.vue';

const store = useNotesStore();
const { notes } = storeToRefs(store);
const { getNotes } = store;

onMounted(() => {
  getNotes()
})
</script>

<template>
    <section>
        <ul>
            <PreviewCard v-for="note in notes" :key="note.note_id" :note="note" />
        </ul>
    </section>
</template>

<style scoped></style>