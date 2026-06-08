import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

function TaskList({ data }) {
  return (
    <div id='TaskList' className=' h-[55%] overflow-x-auto w-full items-center flex justify-start mt-20 gap-5 py-8'>
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} />
        }
        if (elem.completed) {
          return <CompleteTask key={idx} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} />
        }
      })}
    </div>
  )
}

export default TaskList

