import React, { useContext } from 'react'
import { useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'


function CreateTask() {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTO, setAssignTO] = useState("")
    const [category, setCategory] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const [newTask, setnewTask] = useState({})
    const submitHandler = (e) => {
        e.preventDefault()
        const data = userData
        const task = {
            id: Date.now(),
            taskTitle,
            taskDate,
            category,
            assignTO,
            taskDescription,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }
        data.employees.forEach((elem) => {
            if (assignTO === elem.firstName) {
                elem.tasks.push(task)
                elem.taskNumbers.newTask += 1
            }
        })
        setUserData(data)
        localStorage.setItem(
            "employees",
            JSON.stringify(data.employees)
        )
        setAssignTO('')
        setCategory('')
        setTaskDate('')
        setTaskTitle('')
        setTaskDescription('')

    }
    return (
        <div className='bg-[#0D1117] rounded-xl border border-[#30363D] shadow-lg p-8 mt-8'>
            <div className="mb-6 flex justify-center">
                <h2 className="text-2xl font-semibold text-white">
                    📝 Create New Task
                </h2>
            </div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>

                <div className='w-1/2'>

                    <div>
                        <h3 className=' text-sm text-[#F0F6FC] font-medium mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded-md outline-none bg-[#0D1117] border border-[#30363D] mb-4 focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB] placeholder:text-[#8B949E]' type="text" placeholder='Task name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-[#F0F6FC] font-medium mb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded-md outline-none bg-[#0D1117] border border-[#30363D] mb-4 focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB]' type="date" name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-sm text-[#F0F6FC] font-medium mb-0.5'>Asign to</h3>
                        <input value={assignTO} onChange={(e) => { setAssignTO(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded-md outline-none bg-[#0D1117] border border-[#30363D] mb-4 focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB] placeholder:text-[#8B949E]' type="text" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-[#F0F6FC] font-medium mb-0.5'>Category</h3>
                        <input value={category} onChange={(e) => { setCategory(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded-md outline-none bg-[#0D1117] border border-[#30363D] mb-4 focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB] placeholder:text-[#8B949E]' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-[#F0F6FC] font-medium mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} className='text-sm py-2 px-4 w-3/4 rounded-md outline-none bg-[#0D1117] border border-[#30363D] mb-4 focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB] h-45 w-full placeholder:text-[#8B949E]' placeholder="Details....." type="text" name="" id="" />
                    <button className='bg-[#238636] hover:bg-[#2EA043] rounded h-12 font-medium text-lg hover:bg-green-600 w-full mt-2'>create</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
