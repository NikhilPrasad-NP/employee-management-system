import React from 'react'

function Header({data}) {
  const LogOutUser=()=>{
    localStorage.setItem('LoggedInUser','')
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-3xl font-normal'>Hello <br/> <span className='text-4xl font-semibold'>username👋</span></h1>
        <button onClick={LogOutUser} className='bg-red-700 rounded-xl py-2 px-3 text-lg font-semibold'>Log out</button>
    </div>
  )
}

export default Header
