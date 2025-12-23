export default function CMS(){
  return (
    <div>
      <h2 style={{color:'#fff'}}>Website Content Management</h2>
      <div className="panel">
        <div className="small">Edit home page sections, About and Services content.</div>
        <div style={{marginTop:8}}>
          <button className="btn">Edit Home</button>
          <button className="btn" style={{marginLeft:8}}>Edit About</button>
        </div>
      </div>
    </div>
  )
}
