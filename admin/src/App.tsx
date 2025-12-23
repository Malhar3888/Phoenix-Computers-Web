import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles/App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Students from './pages/Students'
import Batches from './pages/Batches'
import Inquiries from './pages/Inquiries'
import Gallery from './pages/Gallery'
import Notices from './pages/Notices'
import CMS from './pages/CMS'
import Users from './pages/Users'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { AuthProvider, useAuth } from './context/AuthContext'

function Protected({children}:{children:JSX.Element}){
  const {user} = useAuth()
  if(!user) return <Navigate to="/login" replace />
  return children
}

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<Shell/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

function Shell(){
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Protected><Dashboard/></Protected>} />
          <Route path="/courses" element={<Protected><Courses/></Protected>} />
          <Route path="/students" element={<Protected><Students/></Protected>} />
          <Route path="/batches" element={<Protected><Batches/></Protected>} />
          <Route path="/inquiries" element={<Protected><Inquiries/></Protected>} />
          <Route path="/gallery" element={<Protected><Gallery/></Protected>} />
          <Route path="/notices" element={<Protected><Notices/></Protected>} />
          <Route path="/cms" element={<Protected><CMS/></Protected>} />
          <Route path="/users" element={<Protected><Users/></Protected>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  )
}
