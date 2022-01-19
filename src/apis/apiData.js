import axios from 'axios'

export const mainAxios = axios.create({
  baseURL:  'https://fullstack.exercise.applifting.cz',
  headers: {
    'X-API-KEY': '0578e5f7-d8df-4482-b910-29ebf8c47d37',
    Authorization: '814971b2-31b3-4ce2-9bdf-9273b9ee8b41',
    'Content-Type': 'application/json'
  }
})