import apiCall from './api';

const paymentService = {
  // Get all payments
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/payments${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get payment by ID
  getById: async (id) => {
    return await apiCall(`/payments/${id}`);
  },

  // Create payment
  create: async (paymentData) => {
    return await apiCall('/payments', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  },

  // Update payment
  update: async (id, paymentData) => {
    return await apiCall(`/payments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(paymentData),
    });
  },

  // Delete payment
  delete: async (id) => {
    return await apiCall(`/payments/${id}`, {
      method: 'DELETE',
    });
  },
};

export default paymentService;
