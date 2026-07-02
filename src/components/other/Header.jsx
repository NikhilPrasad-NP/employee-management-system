import React, { useContext } from 'react'


function Header(props) {
  const loggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'))
  const Username = loggedInUser.data.firstName

  const LogOutUser = () => {
    localStorage.setItem('LoggedInUser', '')
    props.changeUser("")
  }

  return (
    <div className='flex items-center justify-between mb-10'>
      <div>
        <p className="text-lg text-slate-400 font-medium">
          Welcome Back,
        </p>

        <h1 className="text-5xl font-bold text-white mt-1 ">
          {Username} 👋
        </h1>
      </div>
      <div className="flex items-center gap-5">

        <div className='w-12 h-12 rounded-full bg-[#238636] flex items-center justify-center text-xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 ' >{Username.charAt(0)}</div>

        <button onClick={LogOutUser} className='bg-[#DA3633] hover:bg-red-700 hover:scale-105 rounded-xl py-2.5 px-5 text-lg font-semibold transition-all duration-300'>Log out</button>
      </div>
    </div>
  )
}

export default Header
