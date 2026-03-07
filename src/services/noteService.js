import apiCall from './api';

const noteService = {
  // Get all notes
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/notes${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get note by ID
  getById: async (id) => {
    return await apiCall(`/notes/${id}`);
  },

  // Create note
  create: async (noteData) => {
    return await apiCall('/notes', {
      method: 'POST',
      body: JSON.stringify(noteData),
    });
  },

  // Update note
  update: async (id, noteData) => {
    return await apiCall(`/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(noteData),
    });
  },

  // Delete note
  delete: async (id) => {
    return await apiCall(`/notes/${id}`, {
      method: 'DELETE',
    });
  },
};

export default noteService;
