export default function Notices(){
  return (
    <div>
      <h2 style={{color:'#fff'}}>Notices & Announcements</h2>
      <div className="panel">
        <textarea placeholder="Write a notice..." style={{minHeight:120}} />
        <div style={{marginTop:8}}>
          <button className="btn">Publish</button>
        </div>
      </div>
    </div>
  )
}
