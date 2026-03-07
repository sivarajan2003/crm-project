import apiCall from './api';

const leadService = {
  // Get all leads
  getAllLeads: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/leads${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get lead by ID
  getLeadById: async (id) => {
    return await apiCall(`/leads/${id}`);
  },

  // Create lead
  createLead: async (leadData) => {
    return await apiCall('/leads', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
  },

  // Update lead
  updateLead: async (id, leadData) => {
    return await apiCall(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(leadData),
    });
  },

  // Delete lead
  deleteLead: async (id) => {
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
