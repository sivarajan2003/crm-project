import apiCall from './api';

const activityService = {
  // Get all activities
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/activities${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get activity by ID
  getById: async (id) => {
    return await apiCall(`/activities/${id}`);
  },

  // Create activity
  create: async (activityData) => {
    return await apiCall('/activities', {
      method: 'POST',
      body: JSON.stringify(activityData),
    });
  },

  // Update activity
  update: async (id, activityData) => {
    return await apiCall(`/activities/${id}`, {
      method: 'PUT',
      body: JSON.stringify(activityData),
    });
  },

  // Delete activity
  delete: async (id) => {
    return await apiCall(`/activities/${id}`, {
      method: 'DELETE',
    });
  },
};

export default activityService;
