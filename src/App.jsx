import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmplyoyeeDashboard from './components/Dashboard/EmplyoyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [User, setUser] = useState(null)
  const AuthData = useContext(AuthContext)

  useEffect(() => {
    if (AuthData) {
      const LoggedInUser = localStorage.getItem("LoggedInUser")
      if (LoggedInUser) {
        setUser(LoggedInUser.role)
      }
    }
  }, [AuthData])


  const handleLogin = (email, password) => {
    if (AuthData && AuthData.admin.find((a) => email == a.email && password == a.password)) {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (AuthData && AuthData.employees.find((e) => email == e.email && password == e.password)) {
      setUser('employee')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee' }))
    } else {
      alert("Invalid credentials")
    }
  }

  const data = useContext(AuthContext)
  console.log(data)

  return (
    <>
      {!User && <Login handleLogin={handleLogin} />}
      {User === 'admin' && <AdminDashboard />}
      {User === 'employee' && <EmplyoyeeDashboard />}
      {/* <EmplyoyeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>

  )
}

export default App
