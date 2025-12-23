export default function Topbar(){
  return (
    <div className="topbar">
      <div>
        <input placeholder="Search..." style={{padding:'8px',borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.04)',color:'var(--muted)'}} />
      </div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div className="small">Admin</div>
        <button className="btn">Sign out</button>
      </div>
    </div>
  )
}
