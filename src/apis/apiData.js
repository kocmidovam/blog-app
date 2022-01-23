import axios from 'axios'

export const mainAxios = axios.create({
  baseURL:  process.env.REACT_APP_API_URL,
  headers: {
    'X-API-KEY': process.env.REACT_APP_API_KEY,
    Authorization: process.env.REACT_APP_LOGIN,
    'Content-Type': 'application/json'
  }
})