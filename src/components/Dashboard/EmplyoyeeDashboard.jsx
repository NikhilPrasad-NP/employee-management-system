import React from 'react'
import Header from '../other/Header'
import TaskOverview from '../other/TaskOverview'
import TaskList from '../TaskList/TaskList'

function EmplyoyeeDashboard({data}) {
  console.log(data)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={data} />
      <TaskOverview data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmplyoyeeDashboard
