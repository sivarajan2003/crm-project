import apiCall from './api';

const taskService = {
  // Get all tasks
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/tasks${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get task by ID
  getById: async (id) => {
    return await apiCall(`/tasks/${id}`);
  },

  // Create task
  create: async (taskData) => {
    return await apiCall('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  },

  // Update task
  update: async (id, taskData) => {
    return await apiCall(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(taskData),
    });
  },

  // Delete task
  delete: async (id) => {
    return await apiCall(`/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};

export default taskService;
