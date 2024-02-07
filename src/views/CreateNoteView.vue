<script setup lang="ts">
import { useRouter } from 'vue-router';
import CustomButton from '@/components/CustomButton.vue';

const router = useRouter();
</script>

<template>
    <h1>Create note</h1>
    <CustomButton :buttonAction="() => router.back()">Back</CustomButton>
</template>

<style scoped></style>