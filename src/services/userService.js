import apiCall from './api';

const userService = {
  // Get all users
  getAll: async () => {
    return await apiCall('/users');
  },

  // Get user by ID
  getById: async (id) => {
    return await apiCall(`/users/${id}`);
  },

  // Create user
  create: async (userData) => {
    return await apiCall('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Update user
  update: async (id, userData) => {
    return await apiCall(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  // Delete user
  delete: async (id) => {
    return await apiCall(`/users/${id}`, {
      method: 'DELETE',
    });
  },
};

export default userService;
