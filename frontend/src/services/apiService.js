import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://guarded-island-52781-2df08c0e3acc.herokuapp.com/api', // Remplace par l'URL de ton backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiService;