import React from 'react'
import Header from '../other/Header'
import TaskOverview from '../other/TaskOverview'
import TaskList from '../TaskList/TaskList'

function EmplyoyeeDashboard() {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskOverview/>
      <TaskList/>
    </div>
  )
}

export default EmplyoyeeDashboard
