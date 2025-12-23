export default function Courses(){
  return (
    <div>
      <h2 style={{color:'#fff'}}>Courses</h2>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <div className="small">Manage courses — add, edit, remove.</div>
        <button className="btn">Add Course</button>
      </div>
      <div className="table panel">
        <table style={{width:'100%'}}>
          <thead><tr><th>Name</th><th>Category</th><th>Seats</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>Python for Beginners</td><td>Programming</td><td>30</td><td><button className="btn">Edit</button></td></tr>
            <tr><td>Full MERN Stack</td><td>Web</td><td>20</td><td><button className="btn">Edit</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
