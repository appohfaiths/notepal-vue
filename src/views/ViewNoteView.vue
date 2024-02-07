<script setup lang="ts">
import { ref } from 'vue';
import { useNotesStore } from '@/stores/notes';
import { onMounted } from 'vue';
import type { Note } from '@/types';
import { useRoute, useRouter } from 'vue-router';
import CustomButton from '@/components/CustomButton.vue';

const store = useNotesStore();
const { deleteNote, viewNote } = store;
const note = ref<Note>();
const route = useRoute();
const router = useRouter();

onMounted(() => {
    const id = route.params.id as string;
    note.value = viewNote(id);
});

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <main>
    <h1>View Note</h1>
    <CustomButton :buttonAction="() => router.back()">Back</CustomButton>
    <article v-if="note">
      <h2>{{ note?.title }}</h2>
      <p>{{ note?.body }}</p>
      <button @click="deleteNote(note.note_id), router.push('/')">delete note</button>
    </article>
    <div v-else>
        <p>Loading</p>
    </div>
  </main>
</template>

<style scoped></style>