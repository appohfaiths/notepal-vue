import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    { note_id: 1, title: 'Note 1' },
    { note_id: 2, title: 'Note 2' },
    { note_id: 3, title: 'Note 3' }
  ])

  const deleteNote = computed(() => {
    return (id: number) => {
      notes.value = notes.value.filter(note => note.note_id !== id)
    }
  })

  async function getNotes() {
    try {
      // Fetch notes from an API
      const response = await fetch('https://zfcq5cgd7np6zqyi3g5xint2yi0fvbbq.lambda-url.us-east-1.on.aws/list-notes/frontend')
      const data = await response.json()
      console.log(data.notes)
      notes.value = data.notes
      return notes.value
    }
    catch (error) {
      console.error(error)
    }
  }

  function $reset() {
    notes.value = []
  }

  return { notes, getNotes, deleteNote, $reset }
})
