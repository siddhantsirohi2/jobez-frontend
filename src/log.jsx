import React, { useState } from 'react'

import companylogo from './Designer.png';
import revry from './image.png';

function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const [loginEmail, setLoginEmail] = useState("");
    const updateEmail = (e) => {
        setLoginEmail(e.target.value);
    }
    const [loginPassword, setLoginPassword] = useState("");

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerAvatar, setRegisterAvatar] = useState("");
    console.log("hello");
    const LoginForm = () => {
        return (
            <div className="bg-white flex flex-col items-center justify-center w-full lg:w-1/2 h-screen py-36 ">

                <img src={revry} alt="description" width={600} />
                <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
                <h3 className='text-xl font-semibold text-cyan-700 font-serif pt-2'>Sign In!</h3>
                <div className='flex space-x-2 m-4 items-center justify-center'>

                </div>
                {/* Inputs */}
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <input type='email' className=' block text-lg font-medium mt-1 p-2  border box-border  w-full rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300' placeholder='Email'
                            onChange={(e) => { setLoginEmail(e.target.value) }} value={loginEmail} ></input>
                    </div>
                    <input type="password" className=' block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300' placeholder='Password'></input>
                    <button className='rounded-2xl m-2 w-full  text-white  px-4 py-2 shadow-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>
                        Sign In
                    </button>
                </div>
                <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
                <p className='text-blue-950 mt-4 text-sm'>Don't have an account?</p>
                <p className='text-sky-700 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
            </div>
        );
    };

    const SignUpForm = () => {
        return (
            <div className="bg-white flex flex-col items-center justify-center w-full lg:w-1/2 h-screen py-36 ">
                <img src={revry} alt="description" width={600} />
                <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
                <h3 className='text-xl font-semibold text-emerald-700 pt-5'>Create Account!</h3>
                <div className='flex space-x-2 m-4 items-center justify-center'>

                </div>
                {/* Inputs */}
                <div className='flex flex-col items-center justify-center mt-2'>
                    <input type="name" className=' block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300' placeholder='Name'></input>
                    <input type='email' className=' block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300' placeholder='Email'></input>
                    <input type="password" className=' block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300' placeholder='Password'></input>
                    <input type="password" className=' block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300' placeholder='Avatar URL'></input>
                    <button className='rounded-2xl m-4 text-cyan-50 bg-sky-500 w-3/5 px-4 py-1 shadow-md hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>
                        Sign Up
                    </button>
                </div>
                <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
                <p className='text-violet-300 mt-4 text-sm'>Already have an account?</p>
                <p className='text-purple-300 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
            </div>
        );
    };

    return (
        <div className="bg-gray-100 flex justify-center ">
            <main className="flex items-center w-full ">
                <div className=" flex justify-start w-1/2  ">
                    <img src={companylogo} alt="description" width={800} />
                </div>
                {isLogin ? (
                    <LoginForm />
                ) : (
                    <SignUpForm />
                )}
            </main>
        </div>
    );
}

export default Login