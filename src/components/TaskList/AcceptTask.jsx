import React from 'react'

const AcceptTask = () => {
    return (
        <div className='bg-orange-300 h-full w-100 rounded-2xl shrink-0 p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 rounded-sm py-1 px-3 text-xl font-semibold'>High</h3>
                <h4 className='text-xl'>29 may 2026 </h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold '>playing games...</h2>
            <p className='mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique incidunt quos unde enim vitae.</p>
            <div className='flex justify-center items-center gap-5 mt-5'>
                <button className='bg-green-500 rounded py-1 px-2 p-1'>Mark As Completed</button>
                <button className='bg-red-500 rounded py-1 px-2 p-1'>Mark As Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
