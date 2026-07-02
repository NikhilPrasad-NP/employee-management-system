import React from 'react'

function TaskOverview({ data }) {
  const overviewCards = [
    {
        title: "New Tasks",
        count: data.taskNumbers.newTask,
        color: "bg-red-500"
    },
    {
      title: "Active task",
      count: data.taskNumbers.active,
      color: "bg-red-500"
    },
    {
      title: "Completed task",
      count: data.taskNumbers.completed,
      color: "bg-red-500"
    },
    {
      title: "Failed task",
      count: data.taskNumbers.failed,
      color: "bg-red-500"
    },
]
  return (
    <div className='flex gap-5 screen mt-10 '>
      {overviewCards.map((oc)=>{
        return (
        <div className='bg-[#161B22]  border border-[#30363D] shadow-lg transition-all duration-300 hover:border-[#1F6FEB] hover:-translate-y-1 flex-1 rounded-xl p-6'>
          <h2 className='text-5xl font-bold'>{oc.count}</h2>
          <h3 className='text-2xl text-[#8B949E] font-medium'>{oc.title}</h3>
          </div>
      )
      })}
    </div>
  )
}

export default TaskOverview
