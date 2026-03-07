import apiCall from './api';

const authService = {
  // Login
  login: async (email, password) => {
    const response = await apiCall('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.success && response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('auth', 'true');
    }
    
    return response;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('auth');
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

export default authService;
