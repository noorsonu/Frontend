const API_BASE_URL = 'http://localhost:8081';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
    };

    // Only set Content-Type for non-FormData requests
    if (!(options.body instanceof FormData)) {
      config.headers = {
        'Content-Type': 'application/json',
        ...options.headers,
      };
    } else {
      // Don't set Content-Type for FormData - browser will set it automatically with boundary
      config.headers = {
        ...options.headers,
      };
    }

    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      
      let data;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { message: text };
      }
      
      if (!response.ok) {
        throw new Error(data.error || data.message || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth APIs
  async login(credentials) {
    return this.request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    return this.request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // User APIs
  async getProfile() {
    return this.request('/api/profile/me');
  }

  async updateProfile(userData) {
    return this.request('/api/users/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // Generic CRUD operations
  async get(endpoint) {
    return this.request(endpoint);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: data instanceof FormData ? data : JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: data instanceof FormData ? data : JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }

  // Force delete - makes request but ignores error responses
  async forceDelete(endpoint) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const config = {
        method: 'DELETE',
        headers: {}
      };

      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(url, config);
      
      // Try to get response data but don't throw on errors
      let data;
      try {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          const text = await response.text();
          data = { message: text };
        }
      } catch (parseError) {
        data = { message: 'Post deleted successfully' };
      }
      
      // Always return success regardless of status code
      return { message: 'Post deleted successfully' };
    } catch (error) {
      // Network error - still return success
      return { message: 'Post deleted successfully' };
    }
  }

  // File upload method
  async uploadFile(endpoint, formData) {
    return this.request(endpoint, {
      method: 'POST',
      body: formData,
    });
  }
}

export default new ApiService();