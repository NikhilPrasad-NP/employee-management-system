import React from 'react'

function TaskOverview() {
  return (
    <div className='flex justify-start gap-3 screen mt-10 '>
      <div className='bg-red-700 w-[45%] rounded-2xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New task</h3>
      </div>
      <div className='bg-green-700 w-[45%] rounded-2xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New task</h3>
      </div>
      <div className='bg-sky-700 w-[45%] rounded-2xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New task</h3>
      </div>
      <div className='bg-yellow-700 w-[45%] rounded-2xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New task</h3>
      </div>
      <div className='bg-purple-700 w-[45%] rounded-2xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New task</h3>
      </div>
    </div>
  )
}

export default TaskOverview
