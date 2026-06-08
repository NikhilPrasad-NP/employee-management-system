import React from 'react'

const NewTask = () => {
    return (
        <div className='bg-red-400 h-full w-100 rounded-2xl shrink-0 p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 rounded-sm py-1 px-3 text-xl font-semibold'>High</h3>
                <h4 className='text-xl'>29 may 2026 </h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold '>playing games...</h2>
            <p className='mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique incidunt quos unde enim vitae.</p>
            <div className='mt-5 flex justify-center'>
                <button className='bg-green-500 rounded py-1 px-2 p-1'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
