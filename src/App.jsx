import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmplyoyeeDashboard from './components/Dashboard/EmplyoyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [User, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  const currentEmployee =
    userData?.employees?.find(
      e => e.email === LoggedInUserData?.email
    )

  useEffect(() => {
    const LoggedInUser = localStorage.getItem('LoggedInUser')
    if (LoggedInUser) {
      const userData = JSON.parse(LoggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  // localStorage.clear()
  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123' && userData) {
      const admins = userData.admin.find((e) => email == e.email && password == e.password)
      if (admins) {
        setUser('admin')
        setLoggedInUserData(admins)
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin', data: admins }))
      }
    } else if (userData) {
      const employee = userData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert("Invalid credentials")
    }
  }
  return (
    <>
      {!User && <Login handleLogin={handleLogin} />}
      {User === 'admin' && <AdminDashboard data={LoggedInUserData} changeUser={setUser} />}
      {User === 'employee' && currentEmployee && (<EmplyoyeeDashboard data={currentEmployee} changeUser={setUser} />)}
    </>
  )
}

export default App
