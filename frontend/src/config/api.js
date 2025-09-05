// API configuration file to centralize API endpoint management
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:8080/api';

export const API = {
  baseUrl: API_BASE_URL,
  endpoints: {
    configurations: (id) => `${API_BASE_URL}/configurations/${id}`,
  }
};

export default API;
