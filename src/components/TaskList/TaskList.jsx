import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'

function TaskList({ data }) {
  return (
      <div id='TaskList' className=' h-[55%] overflow-x-auto w-full items-stretch flex justify-start gap-6 py-8 scroll-smooth '>
        {data.tasks.map((elem) => {
          if (elem.active) {
            return <AcceptTask key={elem.id} data={elem} />
          }
          if (elem.newTask) {
            return <NewTask key={elem.id} data={elem} />
          }
          if (elem.completed) {
            return <CompleteTask key={elem.id} data={elem} />
          }
          if (elem.failed) {
            return <FailedTask key={elem.id} data={elem} />
          }
        })}
      </div>
      
      
  )
}

export default TaskList

