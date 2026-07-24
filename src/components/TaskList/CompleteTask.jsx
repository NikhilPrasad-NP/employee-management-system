import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='bg-[#161B22] border border-[#30363D]  w-[85vw] sm:w-[320px] lg:w-[360px] snap-start rounded-2xl shrink-0 p-5 hover:border-[#1F6FEB] hover:-translate-y-1 transition-all duration-300'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 rounded-full py-1 px-3 text-white text-sm font-medium uppercase tracking-wide'>{data.category.toUpperCase()}</h3>
                <h4 className='text-sm text-[#8B949E]'>{data.taskDate} </h4>
            </div>
            <h2 className='mt-6 text-2xl font-bold text-white'>{data.taskTitle}</h2>
            <p className='mt-4 text-lg lg:text-xl leading-6 text-[#8B949E]'>{data.taskDescription}</p>
            <div className='mt-8 flex justify-center'>
                <button className='bg-[#2EA043] rounded-xl py-2.5 px-5 font-medium'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask
