import React from 'react'

function TaskOverview({ data }) {
  const overviewCards = [
    {
        title: "New Tasks",
        count: data.taskNumbers.newTask
    },
    {
      title: "Active task",
      count: data.taskNumbers.active
    },
    {
      title: "Completed task",
      count: data.taskNumbers.completed
    },
    {
      title: "Failed task",
      count: data.taskNumbers.failed
    },
]
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-10 '>
      {overviewCards.map((oc,idx)=>{
        return (
        <div key={idx} className="bg-[#161B22] border border-[#30363D] shadow-lg transition-all duration-300 hover:border-[#1F6FEB] rounded-xl p-4 md:p-6 flex-1 text-center lg:text-left">
          <h2 className='text-2xl md:text-4xl font-bold mb-1'> {oc.count}</h2>
          <h3 className='text-base md:text-xl text-[#8B949E] font-medium'>{oc.title}</h3>
          </div>
      )
      })}
    </div>
  )
}

export default TaskOverview
