import React from 'react'
import Header from '../other/Header'
import TaskOverview from '../other/TaskOverview'
import TaskList from '../TaskList/TaskList'

function EmplyoyeeDashboard(props) {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskOverview data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmplyoyeeDashboard
