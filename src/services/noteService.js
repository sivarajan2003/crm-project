import apiCall from './api';

const noteService = {
  // Get all notes
  getAllNotes: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/notes${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get note by ID
  getNoteById: async (id) => {
    return await apiCall(`/notes/${id}`);
  },

  // Create note
  createNote: async (noteData) => {
    return await apiCall('/notes', {
      method: 'POST',
      body: JSON.stringify(noteData),
    });
  },

  // Update note
  updateNote: async (id, noteData) => {
    return await apiCall(`/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(noteData),
    });
  },

  // Delete note
  deleteNote: async (id) => {
    return await apiCall(`/notes/${id}`, {
      method: 'DELETE',
    });
  },
};

export default noteService;
