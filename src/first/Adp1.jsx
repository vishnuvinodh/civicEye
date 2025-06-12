import React from 'react'
import ca from './Logo.png'
import { VscGraphLine } from "react-icons/vsc";
import { IoPerson } from "react-icons/io5";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { BiSolidFileBlank } from "react-icons/bi";
import { BsPersonFillGear } from "react-icons/bs";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';



import Overv from '../Overv';
import Complaint from '../Complaint';
import Usermanag from '../Usermanag';
import Feedback from '../Feedback';
  

const Adp1 = () => {
  const navigate=useNavigate()

 const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("usertype");
    localStorage.removeItem("email");
    navigate('/log');
  };

  return (
    <div className='flex gap-2 '>
        <div className='w-1/4'> 
          <div className='flex flex-col justify-center items-center'>
            <img src={ca} alt=""  className='w-60'/>
          </div>

          <div className='flex flex-col text-[22px] font-bold mt-24 ml-8'>
           <Link to="/admin" ><button className='flex items-center mb-3 gap-2  text-black bg-blue-500 hover:bg-blue-200 hover:text-blue-500 w-72 rounded-lg p-2'><VscGraphLine /><h2> Overview</h2> </button></Link>
           <Link to="/admin/complaint" > <button className='flex items-center mb-3 gap-2 text-black bg-blue-500 hover:bg-blue-200 hover:text-blue-500  w-72 rounded-lg p-2'><FaPersonCircleExclamation /><h2>Complaints</h2></button></Link>
           <Link to="/admin/usermanag" ><button className='flex items-center mb-3 gap-2  text-black bg-blue-500 hover:bg-blue-200 hover:text-blue-500 w-72 rounded-lg p-2'><IoPerson /><h2>User Management</h2></button></Link>
          <Link to="/admin/feedback" > <button className='flex items-center mb-3 gap-2  text-black bg-blue-500 hover:bg-blue-200 hover:text-blue-500  w-72 rounded-lg p-2'><BiSolidFileBlank /><h2>Feedback</h2></button></Link>
          </div>
          
          <div className='flex flex-col text-[22px] font-bold ml-8 '>
          <button className='flex items-center mb-3 gap-2 hover:bg-blue-500 hover:text-white  w-72 rounded-lg p-2 mt-72 bg-blue-600'onClick={logout} ><BsPersonFillGear /><h2>Logout</h2></button>

          </div>

        </div>
        
        <div className='bg-sky-100 rounded-lg px-5 py-5 w-full'>
        <Routes>
        <Route path="/" element={<Overv></Overv>}></Route>
        <Route path="/complaint" element={<Complaint></Complaint>}></Route>
        <Route path="/usermanag" element={<Usermanag></Usermanag>}></Route>
        <Route path="/feedback" element={<Feedback></Feedback>}></Route>

       </Routes>
      

        </div>
    </div>
  )
}

export default Adp1