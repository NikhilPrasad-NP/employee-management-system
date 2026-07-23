import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskOverview from '../other/TaskOverview'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'
import NewTask from '../TaskList/NewTask'

function EmplyoyeeDashboard(props) {
  const [userData, setUserData] = useContext(AuthContext)
  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
  const Clear = () => {
    const employeeData = userData
    const confirmDelete = window.confirm("Are you sure you want to clear all completed and failed tasks?")
    if (!confirmDelete) return
    employeeData.employees.forEach((elem) => {
      if (loggedInUser.data.email === elem.email) {
        elem.tasks = elem.tasks.filter((task) => {
          return task.newTask || task.active
        })
      }
    })
    setUserData({ ...employeeData })
    const updatedEmployee = employeeData.employees.find(
      (e) => e.email === loggedInUser.data.email
    )
    localStorage.setItem(
      "LoggedInUser",
      JSON.stringify({
        role: "employee",
        data: updatedEmployee
      })
    )
    localStorage.setItem(
      "employees",
      JSON.stringify(employeeData.employees)
    )
  }
  return (
    <div className='p-4 md:p-10 bg-[#000000] min-h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskOverview data={props.data} />
      <div className="mt-12 flex justify-between items-center gap-3">
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-white">
            My Tasks :
          </h2>
        </div>
        <button onClick={Clear} className='bg-[#DA3633] hover:bg-red-700 text-white px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-sm md:text-base transition-all duration-200'>Clear</button>
      </div>
      <TaskList data={props.data} />
    </div>
  )
}

export default EmplyoyeeDashboard
