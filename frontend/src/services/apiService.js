import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplace par l'URL de ton backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiService;
