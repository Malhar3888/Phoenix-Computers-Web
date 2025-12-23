export default function Gallery(){
  return (
    <div>
      <h2 style={{color:'#fff'}}>Gallery Uploads</h2>
      <div className="panel">
        <div className="small">Upload photos or videos to be displayed on the website.</div>
        <div style={{marginTop:12}}>
          <input type="file" accept="image/*,video/*" />
          <div style={{marginTop:8}} className="small">Tip: drag & drop supported in production uploader.</div>
        </div>
      </div>
    </div>
  )
}
