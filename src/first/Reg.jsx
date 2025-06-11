import React, { useState } from 'react'
import im from './Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Reg = () => {
   const[data,setdata]=useState({})
   const navigate=useNavigate();
   const handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
   }
   const handlesubmit=async(event)=>{
    event.preventDefault()
    let respons=await axios.post('https://civiceye-1-tqmf.onrender.com/user/register',{...data,usertype:"user"})
    console.log(respons);
    toast.success("Regstration Successful!")
    navigate('/log')
    
   }
   console.log(data);
    

  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-4xl border shadow-md rounded-xl flex overflow-hidde pt-10 pb-10'>


<div className='border-r-2 w-1/2 bg-white flex flex-col items-center justify-center p-10'>
    <h1 className='  w-64 mb-28'>
       <img src={im} alt="" />

    </h1>
    <p className='text-center mb-16 font-bold pb-24'>Welcome to CiviEye! <br /> <br /><br />
        Your platform to report, <br />track, and resolve br public <br />issues with ease.
    </p>
</div>

<div className=' w-1/2 p-10 ml-9 mr-14  flex flex-col justify-center items-center'>
 <h1 className='text-[20px] mb-6 '><b>SIGN <span className='text-blue-500'>IN</span></b></h1>
  <form action="" onSubmit={handlesubmit}>
    <input type="text" placeholder='Full Name' name='name' onChange={handlechange} className='w-full pl-4 pt-2 pb-2 border rounded-lg outline- mb-4 text-blue-500'/>
    <input type="number" placeholder='Mobile Number' name='mobile'  onChange={handlechange} className='w-full pl-4 pt-2 pb-2 border rounded-lg outline-none mb-4 text-blue-500' />
    <input type="date" placeholder='Data Of Birth' name='DOB' onChange={handlechange} className='w-full pl-4 pt-2 pb-2 border rounded-lg outline-none mb-4 text-blue-500' />
    <input type="email" placeholder='Email' name='email'  onChange={handlechange} className='w-full pl-4 pt-2 pb-2 border rounded-lg outline-none mb-4 text-blue-500' />
    <input type="password" placeholder='Password' name='password'  onChange={handlechange} className='w-full border rounded-lg outline-none pl-4 pt-2 pb-2  text-blue-500' />
    <div className='text-right text-[15px] mt-4'>
   <a href="" className='text-blue-500 font-bold'>Forgot Password?</a>
  </div>
  <button className='w-full bg-blue-400 rounded-lg pt-2 pb-2 text-white mt-6' type='submit'>SIGN IN</button>
  </form>
<p className='text-center text-zinc-300'>Already Have an Account?<Link to="/log"><a href="" className='text-blue-500 font-bold'>Sign up</a></Link></p>
</div>
<ToastContainer position='top-center'/>
</div>
    </div>
  )
}

export default Reg