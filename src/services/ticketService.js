import apiCall from './api';

const ticketService = {
  // Get all tickets
  getAllTickets: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiCall(`/tickets${queryParams ? `?${queryParams}` : ''}`);
  },

  // Get ticket by ID
  getTicketById: async (id) => {
    return await apiCall(`/tickets/${id}`);
  },

  // Create ticket
  createTicket: async (ticketData) => {
    return await apiCall('/tickets', {
      method: 'POST',
      body: JSON.stringify(ticketData),
    });
  },

  // Update ticket
  updateTicket: async (id, ticketData) => {
    return await apiCall(`/tickets/${id}`, {
      method: 'PUT',
      body: JSON.stringify(ticketData),
    });
  },

  // Delete ticket
  deleteTicket: async (id) => {
    return await apiCall(`/tickets/${id}`, {
      method: 'DELETE',
    });
  },
};

export default ticketService;
