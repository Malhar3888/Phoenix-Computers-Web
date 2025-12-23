import { NavLink } from 'react-router-dom'

const Icon = ({children}:{children:React.ReactNode})=> (
  <span style={{width:20,display:'inline-block'}}>{children}</span>
)

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">Admin Dashboard</div>
      <nav className="nav">
        <NavLink to="/" end>
          <Icon>🏠</Icon>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/courses">
          <Icon>📚</Icon>
          <span>Courses</span>
        </NavLink>
        <NavLink to="/students">
          <Icon>🎓</Icon>
          <span>Students</span>
        </NavLink>
        <NavLink to="/batches">
          <Icon>🗓️</Icon>
          <span>Batches</span>
        </NavLink>
        <NavLink to="/inquiries">
          <Icon>✉️</Icon>
          <span>Inquiries</span>
        </NavLink>
        <NavLink to="/gallery">
          <Icon>🖼️</Icon>
          <span>Gallery</span>
        </NavLink>
        <NavLink to="/notices">
          <Icon>📢</Icon>
          <span>Notices</span>
        </NavLink>
        <NavLink to="/cms">
          <Icon>📝</Icon>
          <span>Website CMS</span>
        </NavLink>
        <NavLink to="/users">
          <Icon>👥</Icon>
          <span>Users & Roles</span>
        </NavLink>
      </nav>
    </aside>
  )
}
