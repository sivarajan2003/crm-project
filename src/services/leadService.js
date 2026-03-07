import apiCall from './api';

const leadService = {
  // Get all leads
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/leads${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get lead by ID
  getById: async (id) => {
    return await apiCall(`/leads/${id}`);
  },

  // Create lead
  create: async (leadData) => {
    return await apiCall('/leads', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
  },

  // Update lead
  update: async (id, leadData) => {
    return await apiCall(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(leadData),
    });
  },

  // Delete lead
  delete: async (id) => {
    return await apiCall(`/leads/${id}`, {
      method: 'DELETE',
    });
  },

  // Convert lead to customer
  convertToCustomer: async (id) => {
    return await apiCall(`/leads/${id}/convert`, {
      method: 'POST',
    });
  },
};

export default leadService;
