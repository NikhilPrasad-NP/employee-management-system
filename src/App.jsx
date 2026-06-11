import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmplyoyeeDashboard from './components/Dashboard/EmplyoyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [User, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext)  


useEffect(() => {
  const LoggedInUser = localStorage.getItem('LoggedInUser')
  if (LoggedInUser) {
    const userData= JSON.parse(LoggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
}, [])

// localStorage.clear()
  const handleLogin = (email, password) => {
    if (email=='admin@me.com' && password=='123') {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (AuthData) {
      const employee=AuthData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    } else {
      alert("Invalid credentials")
    }
  }

  const data = useContext(AuthContext)
  console.log(data)

  return (
    <>
      {!User && <Login handleLogin={handleLogin} />}
      {User === 'admin' && <AdminDashboard changeUser={setUser}/>}
      {User === 'employee' && <EmplyoyeeDashboard data={LoggedInUserData} changeUser={setUser} />}
      {/* <EmplyoyeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>

  )
}

export default App
