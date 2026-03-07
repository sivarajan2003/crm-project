import apiCall from './api';

const invoiceService = {
  // Get all invoices
  getAllInvoices: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/invoices${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get invoice by ID
  getInvoiceById: async (id) => {
    return await apiCall(`/invoices/${id}`);
  },

  // Create invoice
  createInvoice: async (invoiceData) => {
    return await apiCall('/invoices', {
      method: 'POST',
      body: JSON.stringify(invoiceData),
    });
  },

  // Update invoice
  updateInvoice: async (id, invoiceData) => {
    return await apiCall(`/invoices/${id}`, {
      method: 'PUT',
      body: JSON.stringify(invoiceData),
    });
  },

  // Delete invoice
  deleteInvoice: async (id) => {
    return await apiCall(`/invoices/${id}`, {
      method: 'DELETE',
    });
  },
};

export default invoiceService;
