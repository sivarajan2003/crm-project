import apiCall from './api';

const dealService = {
  // Get all deals
  getAllDeals: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/deals${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get deal by ID
  getDealById: async (id) => {
    return await apiCall(`/deals/${id}`);
  },

  // Create deal
  createDeal: async (dealData) => {
    return await apiCall('/deals', {
      method: 'POST',
      body: JSON.stringify(dealData),
    });
  },

  // Update deal
  updateDeal: async (id, dealData) => {
    return await apiCall(`/deals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dealData),
    });
  },

  // Delete deal
  deleteDeal: async (id) => {
    return await apiCall(`/deals/${id}`, {
      method: 'DELETE',
    });
  },
};

export default dealService;
