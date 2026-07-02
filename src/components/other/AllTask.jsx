import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    return (
        <div id='AllTask' className=" bg-[#0D1117] border border-[#30363D] rounded-xl p-8 mt-8 shadow-lg">
            <div className="mb-6 flex justify-center">
                <h2 className="text-2xl font-semibold text-white">
                    📊 Employee Statistics
                </h2>
            </div>
            <div className='bg-[#0D1117] border border-[#30363D] mb-4 flex items-center justify-between rounded-lg py-4 px-6 text-[#8B949E] uppercase text-center text-sm font-semibold '>
                <h2 className=' w-1/5 '>Employees</h2>
                <h3 className=' w-1/5 '>Active Task</h3>
                <h5 className=' w-1/5 '>New Task</h5>
                <h5 className=' w-1/5 '>Completed Task</h5>
                <h5 className=' w-1/5 '>Failed Task</h5>
            </div>
            <div className=''>
                {userData.employees.map(function (elem, idx) {
                    return <div key={idx} className='bg-[#0D1117] border border-[#30363D] mb-3 flex items-center justify-between rounded-lg py-5 px-6 transition-all duration-300 hover:border-[#1F6FEB] hover:bg-[#161B22]'>
                        <h2 className='w-1/5 text-center font-semibold text-white'>{elem.firstName}</h2>
                        <p className='w-1/5 text-center font-semibold text-white'>{elem.taskNumbers.active}</p>
                        <p className='w-1/5 text-center font-semibold text-white'>{elem.taskNumbers.newTask}</p>
                        <p className='w-1/5 text-center font-semibold text-white'>{elem.taskNumbers.completed}</p>
                        <p className='w-1/5 text-center font-semibold text-white'>{elem.taskNumbers.failed}</p>
                    </div>
                })}
            </div>  
        </div>
    )
}

export default AllTask
