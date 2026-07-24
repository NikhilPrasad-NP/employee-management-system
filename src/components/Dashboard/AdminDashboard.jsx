import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard(props) {
    return (
        <div className='min-h-screen w-full p-4 md:p-7'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask data={props.data}/>
            <AllTask data={props.data}/>
        </div>
    )
}

export default AdminDashboard
