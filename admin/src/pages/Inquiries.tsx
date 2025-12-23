export default function Inquiries(){
  return (
    <div>
      <h2 style={{color:'#fff'}}>Inquiries</h2>
      <div className="panel table">
        <table style={{width:'100%'}}>
          <thead><tr><th>Name</th><th>Message</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Ramesh</td><td>Interested in Python</td><td>Open</td></tr>
            <tr><td>Priya</td><td>Need weekend batch</td><td>Responded</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
