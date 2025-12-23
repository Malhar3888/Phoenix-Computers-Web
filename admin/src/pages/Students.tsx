export default function Students(){
  return (
    <div>
      <h2 style={{color:'#fff'}}>Students</h2>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <div className="small">View and manage registered students</div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn">Import CSV</button>
          <button className="btn">Export</button>
        </div>
      </div>
      <div className="table panel">
        <table style={{width:'100%'}}>
          <thead><tr><th>Name</th><th>Email</th><th>Course</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Akash</td><td>akash@example.com</td><td>Python</td><td>Active</td></tr>
            <tr><td>Sneha</td><td>sneha@example.com</td><td>MERN</td><td>Inactive</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
