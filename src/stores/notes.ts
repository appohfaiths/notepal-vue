import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Note, NoteState } from '@/types'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<NoteState["notes"]>([])
  const isLoading = ref<NoteState["isLoading"]>(false)
  const error = ref<NoteState["error"]>("")

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

  async function addNote(note: Note) {
    try {
      const response = await fetch('https://zfcq5cgd7np6zqyi3g5xint2yi0fvbbq.lambda-url.us-east-1.on.aws/create-note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
      const data = await response.json()
      console.log(data)
      return data
    }
    catch (error) {
      console.error(error)
    }
  }

  async function updateNote(note: Note) {
    try {
      const response = await fetch('https://zfcq5cgd7np6zqyi3g5xint2yi0fvbbq.lambda-url.us-east-1.on.aws/create-note', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteNote(note_id: string) {
    try {
        await fetch(`https://zfcq5cgd7np6zqyi3g5xint2yi0fvbbq.lambda-url.us-east-1.on.aws/delete-note/${note_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(
        response => {
          console.log(response)
          const data = response.json()
          return data
        }
      );
    }
    catch (error) {
      console.error(error)
    }
  }

  function $reset() {
    notes.value = []
  }

  return { notes, isLoading, error, getNotes, addNote, updateNote, deleteNote, $reset }
})
