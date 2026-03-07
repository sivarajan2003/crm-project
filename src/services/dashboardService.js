import api from './api';

const dashboardService = {
  // Get all dashboard statistics
  getStats: async () => {
    try {
      const response = await api('/dashboard/stats', {
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Dashboard stats error:', error);
      throw error;
    }
  }
};

export default dashboardService;
