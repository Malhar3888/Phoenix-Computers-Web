import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
  withCredentials: true // set this if backend uses cookies
})

// Simple in-memory access token holder
let accessToken: string | null = null

export function setAccessToken(token: string | null){
  accessToken = token
}

api.interceptors.request.use((config)=>{
  if(accessToken && config.headers) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

let isRefreshing = false
let refreshQueue: Array<(token: string | null)=>void> = []

const BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

async function refreshToken(){
  try{
    const res = await axios.post(`${BASE}/api/auth/refresh`, {}, { withCredentials: true })
    const token = res.data?.accessToken
    setAccessToken(token)
    return token
  }catch(err){
    setAccessToken(null)
    return null
  }
}

api.interceptors.response.use((r)=>r, async (error)=>{
  const original = error.config
  if(error.response && error.response.status === 401 && !original._retry){
    if(isRefreshing){
      // queue request
      return new Promise((resolve, reject)=>{
        refreshQueue.push((token)=>{
          if(!token) return reject(error)
          original.headers.Authorization = `Bearer ${token}`
          resolve(axios(original))
        })
      })
    }
    original._retry = true
    isRefreshing = true
    const newToken = await refreshToken()
    isRefreshing = false
    refreshQueue.forEach(cb=>cb(newToken))
    refreshQueue = []
    if(newToken){
      original.headers.Authorization = `Bearer ${newToken}`
      return axios(original)
    }
  }
  return Promise.reject(error)
})

export default api
