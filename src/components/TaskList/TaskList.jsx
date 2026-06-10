import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'

function TaskList({ data }) {
  return (
    <div id='TaskList' className=' h-[55%] overflow-x-auto w-full items-center flex justify-start mt-20 gap-5 py-8'>
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem}/>
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem}/>
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList

