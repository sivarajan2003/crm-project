import apiCall from './api';

const dealService = {
  // Get all deals
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/deals${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get deal by ID
  getById: async (id) => {
    return await apiCall(`/deals/${id}`);
  },

  // Create deal
  create: async (dealData) => {
    return await apiCall('/deals', {
      method: 'POST',
      body: JSON.stringify(dealData),
    });
  },

  // Update deal
  update: async (id, dealData) => {
    return await apiCall(`/deals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dealData),
    });
  },

  // Delete deal
  delete: async (id) => {
    return await apiCall(`/deals/${id}`, {
      method: 'DELETE',
    });
  },
};

export default dealService;
