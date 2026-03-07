import apiCall from './api';

const userService = {
  // Get all users
  getAllUsers: async () => {
    return await apiCall('/users');
  },

  // Get user by ID
  getUserById: async (id) => {
    return await apiCall(`/users/${id}`);
  },

  // Create user
  createUser: async (userData) => {
    return await apiCall('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Update user
  updateUser: async (id, userData) => {
    return await apiCall(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  // Delete user
  deleteUser: async (id) => {
    return await apiCall(`/users/${id}`, {
      method: 'DELETE',
    });
  },
};

export default userService;
