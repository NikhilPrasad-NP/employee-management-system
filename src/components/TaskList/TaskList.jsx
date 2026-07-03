import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'

function TaskList({ data }) {
  if (data.tasks.length === 0) {
    return (
      <div className="mt-6 bg-[#161B22] border border-[#30363D] rounded-xl p-12 flex flex-col items-center justify-center text-center">
        <div className="text-6xl mb-4">🎉</div>

        <h2 className="text-3xl font-bold text-white">
          You're All Caught Up!
        </h2>

        <p className="mt-3 text-[#8B949E]">
          No active or new tasks available.
        </p>

        <p className="text-[#8B949E]">
          Check back later for new assignments.
        </p>
      </div>
    )
  }
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

