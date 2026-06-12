import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    return (
        <div id='AllTask' className='bg-[#1c1c1c] p-6 mt-5 rounded '>
            <div className='bg-green-500 mb-4 flex items-center justify-between rounded py-4 px-5 underline text-center '>
                <h2 className=' w-1/5 '>Employees :</h2>
                <h3 className=' w-1/5 '>Active Task :</h3>
                <h5 className=' w-1/5 '>New Task :</h5>
                <h5 className=' w-1/5 '>Completed Task :</h5>
                <h5 className=' w-1/5 '>Failed Task :</h5>
            </div>
            <div className=''>
                {userData.map(function (elem,idx) {
                    return <div key={idx} className='bg-black mb-4 flex items-center justify-between rounded py-4 px-5 '>
                        <h2 className='w-1/5 text-center'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-center'>{elem.taskNumbers.active}</h3>
                        <h5 className='w-1/5 text-center'>{elem.taskNumbers.newTask}</h5>
                        <h5 className='w-1/5 text-center'>{elem.taskNumbers.completed}</h5>
                        <h5 className='w-1/5 text-center'>{elem.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask
