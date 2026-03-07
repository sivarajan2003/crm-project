import apiCall from './api';

const paymentService = {
  // Get all payments
  getAllPayments: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/payments${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get payment by ID
  getPaymentById: async (id) => {
    return await apiCall(`/payments/${id}`);
  },

  // Create payment
  createPayment: async (paymentData) => {
    return await apiCall('/payments', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  },

  // Update payment
  updatePayment: async (id, paymentData) => {
    return await apiCall(`/payments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(paymentData),
    });
  },

  // Delete payment
  deletePayment: async (id) => {
    return await apiCall(`/payments/${id}`, {
      method: 'DELETE',
    });
  },
};

export default paymentService;
