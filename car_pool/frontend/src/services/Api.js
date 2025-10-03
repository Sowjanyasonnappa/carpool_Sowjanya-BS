import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  withCredentials: true,
})

let token = localStorage.getItem('cp_token')
if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

function setToken(newToken) {
  token = newToken
  if (token) {
    localStorage.setItem('cp_token', token)
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    localStorage.removeItem('cp_token')
    delete instance.defaults.headers.common['Authorization']
  }
}

const api = {
  get: (url, config) => instance.get(url, config),
  post: (url, data, config) => instance.post(url, data, config),
  patch: (url, data, config) => instance.patch(url, data, config),
  del: (url, config) => instance.delete(url, config),
  setToken,
}

export default api