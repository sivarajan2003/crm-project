import apiCall from './api';

const activityService = {
  // Get all activities
  getAllActivities: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/activities${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get activity by ID
  getActivityById: async (id) => {
    return await apiCall(`/activities/${id}`);
  },

  // Create activity
  createActivity: async (activityData) => {
    return await apiCall('/activities', {
      method: 'POST',
      body: JSON.stringify(activityData),
    });
  },

  // Update activity
  updateActivity: async (id, activityData) => {
    return await apiCall(`/activities/${id}`, {
      method: 'PUT',
      body: JSON.stringify(activityData),
    });
  },

  // Delete activity
  deleteActivity: async (id) => {
    return await apiCall(`/activities/${id}`, {
      method: 'DELETE',
    });
  },
};

export default activityService;
