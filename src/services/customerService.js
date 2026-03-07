import apiCall from './api';

const customerService = {
  // Get all customers
  getAll: async () => {
    return await apiCall('/customers');
  },

  // Get customer by ID
  getById: async (id) => {
    return await apiCall(`/customers/${id}`);
  },

  // Create customer
  create: async (customerData) => {
    return await apiCall('/customers', {
      method: 'POST',
      body: JSON.stringify(customerData),
    });
  },

  // Update customer
  update: async (id, customerData) => {
    return await apiCall(`/customers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customerData),
    });
  },

  // Delete customer
  delete: async (id) => {
    return await apiCall(`/customers/${id}`, {
      method: 'DELETE',
    });
  },
};

export default customerService;
