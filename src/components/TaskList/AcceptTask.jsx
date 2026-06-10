import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='bg-orange-300 h-full w-100 rounded-2xl shrink-0 p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 rounded-sm py-1 px-3 text-xl font-semibold'>{data.category}</h3>
                <h4 className='text-xl'>{data.taskDate} </h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold '>{data.taskTitle}</h2>
            <p className='mt-3 text-xl'>{data.taskDescription}</p>
            <div className='flex justify-center items-center gap-5 mt-5'>
                <button className='bg-green-500 rounded py-1 px-2 p-1'>Mark As Completed</button>
                <button className='bg-red-500 rounded py-1 px-2 p-1'>Mark As Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
