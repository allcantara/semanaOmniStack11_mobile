import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://d130b090.ngrok.io'
})

export default api