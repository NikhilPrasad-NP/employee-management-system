import React, { useState } from 'react'


const login = ({ handleLogin }) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log(email, password)
        setemail("")
        setpassword("")
    }
    const fillDemoCredentials = (role) => {
        if (role === "admin") {
            setemail("admin@example.com")
            setpassword("123")
        } else {
            setemail("employee1@example.com")
            setpassword("123")
        }
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='w-[90%] md:w-auto border-emerald-600 border-2 rounded-xl p-8 md:p-20'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className='flex flex-col items-center justify-center'>
                    <input required value={email} onChange={(e) => { setemail(e.target.value) }} className='w-full py-2 px-6 border-2 border-emerald-600 rounded-3xl bg-transparent outline-none placeholder:text-gray-300' type="email" placeholder='email' />
                    <input required value={password} onChange={(e) => { setpassword(e.target.value) }} className='w-full mt-3 py-2 px-6 border-2 border-emerald-600 rounded-3xl bg-transparent outline-none placeholder:text-gray-300' type="password" placeholder='password' />
                    <button className='py-2 px-8 w-full font-bold border-none rounded-3xl hover:bg-emerald-700 bg-emerald-600 outline-none mt-6'>Login</button>
                </form>
                <div className="mt-8 border-t border-gray-700 pt-6 w-full">
                    <h3 className="text-lg md:text-xl font-semibold text-center mb-4">
                        Demo Login
                    </h3>

                    <div className="space-y-4">

                        <div className="bg-[#161616e1] border border-gray-700 rounded-lg p-3">
                            <p className="font-semibold text-emerald-400">👨‍💼 Admin</p>
                            <p className="text-sm text-gray-300">Email: admin@example.com</p>
                            <p className="text-sm text-gray-300">Password: 123</p>
                        </div>

                        <button
                            type="button"
                            onClick={() => fillDemoCredentials("admin")}
                            className="w-full py-2 rounded-3xl bg-emerald-600 hover:bg-emerald-700 font-semibold transition"
                        >
                            Fill Admin Credentials
                        </button>

                        <div className="bg-[#161616e1] border border-gray-700 rounded-lg p-3">
                            <p className="font-semibold text-emerald-400">👨‍💻 Employee</p>
                            <p className="text-sm text-gray-300">Email: employee1@example.com</p>
                            <p className="text-sm text-gray-300">Password: 123</p>
                        </div>

                        <button
                            type="button"
                            onClick={() => fillDemoCredentials("employee")}
                            className="w-full py-2 rounded-3xl border border-emerald-600 hover:bg-emerald-700 transition"
                        >
                            Fill Employee Credentials
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
