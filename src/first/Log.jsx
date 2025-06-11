import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Log = () => {
const[data,setdata]=useState([]) 
const navagate=useNavigate();
const handlechange=(event)=>{
  setdata({...data, [event.target.name]:event.target.value});
  
}
const handlesubmit=async(event)=>{
  event.preventDefault()
  try {
    const respons = await axios.post("https://civiceye-1-tqmf.onrender.com/user/login", data);
    console.log("Login Response:", respons.data);
    console.log(respons.userty);
    

  if (respons.status === 201) {
  localStorage.setItem("token", respons.data.token); 
  localStorage.setItem("id", respons.data._id);
  localStorage.setItem("usertype", respons.data.usertype);

  toast.success("Login Successful!");

  setTimeout(() => {
    if (respons.data.usertype === "admin") {
      navagate("/admin");
    } else {
      navagate("/page");
    }
  }, 1500); 
}

  } catch (error) {
    console.error("Login failed:", error);
    toast.error("Login failed. Check credentials.");

  }
  
}

  return (
    <div className='min-h-screen flex items-center justify-center'>

        <div className='w-full max-w-4xl border shadow-md rounded-xl flex overflow-hidde pt-20 pb-20'>

            <div className='border-r-2 w-1/2 bg-white flex flex-col items-center justify-center p-10'>
                <h1 className='text-[30px] font-bold mb-20'>
                    <span className='text-black'>Civic</span>
                    <span className='text-blue-500'>EYE</span>
                </h1>
                <p className='text-center mb-16 font-bold'>Welcome to CiviEye  <br /><br />
                    Your platform to report, track, and resolve public issues with ease.
                </p>
            </div>

            <div className=' w-1/2 p-10 flex flex-col justify-center items-center'>
             <h1 className='text-[20px] mb-6 '><b>SIGN <span className='text-blue-500'>IN</span></b></h1>
              <form action="" onSubmit={handlesubmit}>
                <input type="email"placeholder='Email' onChange={handlechange} name='email' className='w-full pl-4 pt-2 pb-2 border rounded-lg outline-none text-blue-500 ' />
                <input type="password" placeholder='Password' onChange={handlechange} name='password' className='w-full border rounded-lg outline-none pl-4 pt-2 pb-2 mt-8 text-blue-500' />
                <div className='text-right text-[15px] mt-4'>
               <a href="" className='text-blue-500 font-bold'>Forgot Password?</a>
              </div>
              <button className='w-full bg-blue-400 rounded-lg pt-2 pb-2 text-white mt-6' type='submit'>SIGN IN</button>
              </form>
            <p className='text-center'>Don't Have an Account?<Link to="/reg"><a href="" className='text-blue-500'>Sign up</a></Link></p>
            </div>
        </div>
        <ToastContainer position='top-center'/>
    </div>
  )
}

export default Log