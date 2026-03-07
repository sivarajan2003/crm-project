// Utility to clear authentication
export const clearAuth = () => {
  localStorage.removeItem('auth');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  console.log('✅ Authentication cleared!');
};

// Make it available globally for debugging
if (typeof window !== 'undefined') {
  window.clearAuth = clearAuth;
}

export default clearAuth;
