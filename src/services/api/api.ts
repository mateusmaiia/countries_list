import axios from 'axios'


const api = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: import.meta.env.REACT_APP_BASE_URL,
})

export default api