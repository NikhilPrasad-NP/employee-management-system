import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/LocalStorage'

const NewTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)
    const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
    const acceptTask = () => {
        const employeeData = userData
        employeeData.employees.forEach((elem) => {
            if (loggedInUser.data.email === elem.email) {
                elem.tasks.forEach((task) => {
                    if (task.id === data.id) {
                        task.active = true
                        task.newTask = false

                        elem.taskNumbers.newTask--
                        elem.taskNumbers.active++
                    }
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
        <div className='bg-[#161B22] border border-[#30363D] h-full w-[360px] rounded-2xl shrink-0 p-5 hover:border-[#1F6FEB] hover:-translate-y-1 transition-all duration-300'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 rounded-full py-1 px-3 text-white text-sm font-medium uppercase tracking-wide'>{data.category.toUpperCase()}</h3>
                <h4 className='text-sm text-[#8B949E]'>{data.taskDate} </h4>
            </div>
            <h2 className='mt-6 text-2xl font-bold text-white'>{data.taskTitle}</h2>
            <p className='mt-4 text-xl leading-6 text-[#8B949E]'>{data.taskDescription}</p>
            <div className='mt-8 flex justify-center'>
                <button onClick={acceptTask} className='bg-[#238636] hover:bg-[#2EA043] transition-all duration-200 rounded-xl py-2.5 px-5 font-medium'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
