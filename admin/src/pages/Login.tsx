import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const auth = useAuth()
  const nav = useNavigate()
  const submit = async(e:React.FormEvent)=>{
    e.preventDefault()
    const ok = await auth.login(email,password)
    if(ok) nav('/')
  }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
      <div style={{width:420,background:'rgba(255,255,255,0.02)',padding:24,borderRadius:12}}>
        <h2 style={{color:'#fff',marginTop:0}}>Sign in</h2>
        <form onSubmit={submit}>
          <div className="form-row"><input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/></div>
          <div className="form-row"><input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/></div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div className="small">Forgot password?</div>
            <button className="btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}
