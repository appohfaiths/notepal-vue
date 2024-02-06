import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    { id: 1, text: 'Note 1' },
    { id: 2, text: 'Note 2' },
    { id: 3, text: 'Note 3' }
  ])

  return { notes }
})
