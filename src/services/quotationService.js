import apiCall from './api';

const quotationService = {
  // Get all quotations
  getAllQuotations: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/quotations${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get quotation by ID
  getQuotationById: async (id) => {
    return await apiCall(`/quotations/${id}`);
  },

  // Create quotation
  createQuotation: async (quotationData) => {
    return await apiCall('/quotations', {
      method: 'POST',
      body: JSON.stringify(quotationData),
    });
  },

  // Update quotation
  updateQuotation: async (id, quotationData) => {
    return await apiCall(`/quotations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(quotationData),
    });
  },

  // Delete quotation
  deleteQuotation: async (id) => {
    return await apiCall(`/quotations/${id}`, {
      method: 'DELETE',
    });
  },
};

export default quotationService;
