import apiCall from './api';

const customerService = {
  // Get all customers
  getAllCustomers: async () => {
    return await apiCall('/customers');
  },

  // Get customer by ID
  getCustomerById: async (id) => {
    return await apiCall(`/customers/${id}`);
  },

  // Create customer
  createCustomer: async (customerData) => {
    return await apiCall('/customers', {
      method: 'POST',
      body: JSON.stringify(customerData),
    });
  },

  // Update customer
  updateCustomer: async (id, customerData) => {
    return await apiCall(`/customers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customerData),
    });
  },

  // Delete customer
  deleteCustomer: async (id) => {
    return await apiCall(`/customers/${id}`, {
      method: 'DELETE',
    });
  },
};

export default customerService;
