export default function StatsCard({title,value}:{title:string,value:string|number}){
  return (
    <div className="card">
      <h3>{value}</h3>
      <div className="small muted">{title}</div>
    </div>
  )
}
