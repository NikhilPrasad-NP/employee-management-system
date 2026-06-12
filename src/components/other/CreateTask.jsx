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

        setnewTask({ taskTitle, taskDate, category, assignTO, taskDescription, active: false, newTask: true, failed: false, complete: false })

        const data = userData

        data.forEach(function (elem) {
            if (assignTO == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
            }
        })
        console.log(data);
        setUserData(data)
        setAssignTO('')
        setCategory('')
        setTaskDate('')
        setTaskTitle('')
        setTaskDescription('')

    }
    return (
        <div className='bg-[#1c1c1c] rounded p-5 mt-8'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className=' text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded outline-none bg-transparent border-1 border-gray-400 mb-4' type="text" placeholder='Task name' />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-300'>Date</h3>
                        <input value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded outline-none bg-transparent border-1 border-gray-400 mb-4' type="date" name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-300'>Asign to</h3>
                        <input value={assignTO} onChange={(e) => { setAssignTO(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded outline-none bg-transparent border-1 border-gray-400 mb-4' type="text" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-300'>Category</h3>
                        <input value={category} onChange={(e) => { setCategory(e.target.value) }} className='text-sm py-1 px-2 w-3/4 rounded outline-none bg-transparent border-1 border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} className='py-2 px-4 w-full
                        h-45 text-sm border-1 rounded outline-none border-gray-400 bg-transparent' placeholder="Details..." type="text" name="" id="" />
                    <button className='bg-green-500 rounded h-12 font-medium text-lg hover:bg-green-600 w-full mt-2'>create</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
