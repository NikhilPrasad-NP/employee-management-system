import React, { useState } from 'react'


const login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password)
        setemail("")
        setpassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-emerald-600 border-2 rounded-xl p-20'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className='flex flex-col items-center justify-center'>
                    <input required value={email} onChange={(e) => { setemail(e.target.value) }} className='py-2 px-6 border-2 border-emerald-600 rounded-3xl bg-transparent outline-none placeholder:text-gray-300' type="email" placeholder='email' />
                    <input required value={password} onChange={(e) => { setpassword(e.target.value) }} className='mt-3 py-2 px-6 border-2 border-emerald-600 rounded-3xl bg-transparent outline-none placeholder:text-gray-300' type="password" placeholder='password' />
                    <button className='py-2 px-8 w-full font-bold border-none rounded-3xl hover:bg-emerald-700 bg-emerald-600 outline-none mt-6'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default login
