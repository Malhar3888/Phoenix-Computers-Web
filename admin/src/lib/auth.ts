import api, { setAccessToken } from './api'

export async function login(email:string,password:string){
  // POST /api/auth/login -> expects { accessToken, refreshToken? }
  const res = await api.post('/api/auth/login', { email, password })
  const token = res.data?.accessToken
  if(token) setAccessToken(token)
  return res.data
}

export async function logout(){
  try{
    await api.post('/api/auth/logout')
  }finally{
    setAccessToken(null)
  }
}

export async function refresh(){
  // call refresh endpoint (api client already has refresh handling, but expose explicit)
  const res = await api.post('/api/auth/refresh')
  const token = res.data?.accessToken
  if(token) setAccessToken(token)
  return token
}

export async function me(){
  const res = await api.get('/api/auth/me')
  return res.data
}

