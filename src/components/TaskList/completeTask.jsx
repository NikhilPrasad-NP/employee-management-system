import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='bg-purple-600 h-full w-100 rounded-2xl shrink-0 p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 rounded-sm py-1 px-3 text-xl font-semibold'>{data.category}</h3>
                <h4 className='text-xl'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold '>{data.taskTitle}</h2>
            <p className='mt-3 text-xl'>{data.taskDescription}</p>
            <div className='mt-5 flex justify-center'>
                <button className='bg-green-500 rounded py-1 px-2 p-1'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask
