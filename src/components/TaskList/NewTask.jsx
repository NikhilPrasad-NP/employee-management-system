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
        // window.location.reload()
    }

    return (
        <div className='bg-red-400 h-full w-100 rounded-2xl shrink-0 p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 rounded-sm py-1 px-3 text-xl font-semibold'>{data.category}</h3>
                <h4 className='text-xl'>{data.taskDate} </h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold '>{data.taskTitle}</h2>
            <p className='mt-3 text-xl'>{data.taskDescription}</p>
            <div className='mt-5 flex justify-center'>
                <button onClick={acceptTask} className='bg-green-500 rounded py-1 px-2 p-1'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
