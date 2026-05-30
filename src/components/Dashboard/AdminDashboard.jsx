import React from 'react'
import Header from '../other/Header'

function AdminDashboard() {
    return (
        <div className='h-full w-full p-10'>
            <Header />
            <div className='bg-[#1c1c1c] rounded p-5 mt-8'>
                <form className='flex flex-wrap w-full items-center justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3>Task Title</h3>
                            <input type="text" placeholder='Task name' />
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input type="date" name="" id="" />
                        </div>
                        <div>
                            <h3>Asign to</h3>
                            <input type="text" placeholder='Employee name' />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <input type="text" placeholder='design, dev, etc' />
                        </div>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <input type="text" name="" id="" />
                    </div>
                    <button>create</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard
