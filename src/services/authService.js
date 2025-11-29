import apiService from './api';

class AuthService {
  async login(email, password) {
    try {
      const response = await apiService.login({ email, password });
      if (response.token) {
        localStorage.setItem('token', response.token);
      }
      return response;
    } catch (error) {
      const errorMessage = error.message || 'Login failed';
      throw new Error(errorMessage);
    }
  }

  async register(userData) {
    try {
      const response = await apiService.register(userData);
      return response;
    } catch (error) {
      const errorMessage = error.message || 'Registration failed';
      throw new Error(errorMessage);
    }
  }

  async getUserProfile() {
    try {
      const response = await apiService.getProfile();
      return response;
    } catch (error) {
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userInfo');
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new AuthService();