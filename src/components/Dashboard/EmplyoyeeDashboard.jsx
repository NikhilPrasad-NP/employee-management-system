import React from 'react'
import Header from '../other/Header'
import TaskOverview from '../other/TaskOverview'
import TaskList from '../TaskList/TaskList'

function EmplyoyeeDashboard(props) {
  return (
    <div className='p-10 bg-[#151515] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskOverview data={props.data} />
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-white">
          My Tasks :
        </h2>
      </div>
      <TaskList data={props.data} />
    </div>
  )
}

export default EmplyoyeeDashboard
