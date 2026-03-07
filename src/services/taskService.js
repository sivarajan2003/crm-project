import apiCall from './api';

const taskService = {
  // Get all tasks
  getAllTasks: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/tasks${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get task by ID
  getTaskById: async (id) => {
    return await apiCall(`/tasks/${id}`);
  },

  // Create task
  createTask: async (taskData) => {
    return await apiCall('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  },

  // Update task
  updateTask: async (id, taskData) => {
    return await apiCall(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(taskData),
    });
  },

  // Delete task
  deleteTask: async (id) => {
    return await apiCall(`/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};

export default taskService;
