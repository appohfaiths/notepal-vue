<script setup lang="ts">
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import { useNotesStore } from '@/stores/notes';
import CustomButton from '@/components/CustomButton.vue';

const router = useRouter();
const store = useNotesStore();
const { addNote } = store;
const title = ref('');
const body = ref('');

const handleCreateNote = () => {
    console.log('create note');
    console.log(title.value);
    console.log(body.value);
    addNote({
        title: title.value,
        body: body.value,
        "user_id": "frontend",
        "note_id": "string",
        "created_time": 0,
        "updated_time": 0
    });
    title.value = '';
    body.value = '';
    router.push('/');
}
</script>

<template>
    <h1>Create note</h1>
    <CustomButton :buttonAction="() => router.push('/')">Back</CustomButton>

    <form @submit.prevent="">
        <label for="title">Title</label>
        <input v-model="title" type="text" id="title" name="title" required>

        <label for="body">Body</label>
        <textarea v-model="body" id="body" name="body" required></textarea>

        <button @click="handleCreateNote">Create note</button>
    </form>
</template>

<style scoped></style>