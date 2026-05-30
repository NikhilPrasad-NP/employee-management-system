import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-3xl font-normal'>Hello <br/> <span className='text-4xl font-semibold'>Nikhil👋</span></h1>
        <button className='bg-red-700 rounded-xl py-2 px-3 text-lg font-semibold'>Log out</button>
    </div>
  )
}

export default Header
