import StatsCard from '../components/StatsCard'

export default function Dashboard(){
  // sample stats — these would come from API in real app
  const stats = [
    {title:'Total Students', value:1200},
    {title:'Courses', value:18},
    {title:'Batches', value:34},
    {title:'Admissions (this month)', value:42},
    {title:'Enquiries (open)', value:8}
  ]
  return (
    <div>
      <div className="cards">
        {stats.map(s=> <StatsCard key={s.title} title={s.title} value={s.value} />)}
      </div>
      <div className="grid-2">
        <div>
          <div className="panel">
            <h3 style={{color:'#fff'}}>Recent Admissions</h3>
            <div className="table">
              <table style={{width:'100%',borderCollapse:'collapse'}}>
                <thead style={{textAlign:'left'}}>
                  <tr><th>Name</th><th>Course</th><th>Status</th></tr>
                </thead>
                <tbody>
                  <tr><td>Akash</td><td>Python</td><td>Confirmed</td></tr>
                  <tr><td>Sneha</td><td>MERN</td><td>Pending</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="panel">
            <h4 style={{marginTop:0,color:'#fff'}}>Announcements</h4>
            <div className="small">No active notices.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
