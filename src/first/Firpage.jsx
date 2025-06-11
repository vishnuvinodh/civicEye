import React from 'react'
import l from './Logo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import q from './waste2.webp'
import r from './wast3.webp'
import s from './wast4.jpg'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BiMessageError } from "react-icons/bi";
import { PiMedalMilitaryFill } from "react-icons/pi";
import { GrUserPolice } from "react-icons/gr";
import ca from './call.jpg'
import { IoIosMail } from "react-icons/io";
import { MdPhoneCallback } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { Link } from 'react-router-dom';



const Firpage = () => {
  return (
    <div>
        <div>
         
         <div className='flex gap-60  mt-5 mb-5 justify-center items-center'>
            <div><h1 className='w-64'><img src={l}/></h1></div>
            <div className='flex gap-28'>
              <div><a href="" className='no-underline hover:text-red-600 font-bold text-lg'>Home</a></div>
              <div><a href="" className='no-underline hover:text-red-600 font-bold text-lg'>MyComplaints</a></div>
             <Link to="/about" ><h2 className='hover:text-red-600 font-bold text-lg'>About</h2></Link> 
               <div><a href="" className='no-underline hover:text-red-600 font-bold text-lg'>Contact</a></div>
            </div>
            <div><Link to="/log"><button className='border rounded-lg w-28 h-16 bg-blue-400 text-white hover:bg-blue-700'>Login</button></Link></div>
         </div>

         <div>
         <Carousel autoPlay={true} interval={1500} infiniteLoop={true} showThumbs={false} showStatus={false}  >
         <div className="flex justify-center">
         <img src={q} style={{ width: '100%' }} className="mx-auto h-[550px]" />
         </div>
         <div className="flex justify-center">
         <img src={r} style={{ width: '100%' }} className="mx-auto h-[550px]" />
          </div>
         <div className="flex justify-center">
        <img src={s} style={{ width: '100%' }} className="mx-auto h-[550px]" />
         </div>
         </Carousel>
         </div>

        <div className='flex flex-col justify-center items-center bg-gray-300'>
          <h1 className='text-center text-6xl  font-bold mb-11 mt-16'>Make Your Voice Heard! <br />Report Problems,Help Your City and<br />Earn Rewards! </h1>
          <Link to="/reg" ><button className=' rounded-lg w-48 h-12 text-lg bg-blue-400 text-white font-bold hover:bg-blue-900 mb-10'>Sign up</button></Link>
        </div>

        <div className='flex flex-col justify-center items-center'>
         <div> <h1 className='font-bold text-4xl mt-7 mb-7'>Complaint Reports</h1></div>

         <div className='flex gap-9 text-[33px] font-bold'>
          <div className='flex flex-col justify-center items-center  w-72  shadow-md rounded-xl p-10'><h1><IoShieldCheckmarkSharp /> </h1>
          <h1>Complaints <br />Reagistered</h1>
          <h1>1000</h1>
          
          </div>

          <div className='flex flex-col justify-center items-center  w-72  shadow-md rounded-xl p-10'>
          <h1><BiMessageError /> </h1>
          <h1 className='mb-10'>Reports Filed</h1>
          <h1>912</h1>

          
          </div>

          <div className='flex flex-col justify-center items-center  w-72  shadow-md rounded-xl p-10 '>
          <h1 className=''><PiMedalMilitaryFill /> </h1>
          <h1>Rewards</h1><h1>Distributed</h1>
          <h1>800</h1>
          </div>

          <div className='flex flex-col justify-center items-center w-72  shadow-md rounded-xl p-10'>
          <h1><GrUserPolice />  </h1>
          <h1 className='mb-10'>impact Made</h1>
          <h1>.......</h1>
          </div>

         </div>
        </div>


        <div className='flex flex-col justify-center items-center mt-56'>
           <div><h1 className='text-[40px] font-bold mb-14 font-serif'>What we do</h1></div>

           <div className='flex justify-center items-center gap-8'>
            <div className='flex flex-col justify-center items-center text-center rounded-lg border-blue-400 border-2 w-80 h-32'><h2>You Register The Complaint</h2></div>
            <div className='flex flex-col justify-center items-center text-center rounded-lg border-blue-400 border-2 w-80 h-32'><h2>Our Team Verifies the <br />Complaints and share it <br />the Responsible <br /> Authorities</h2></div>
            <div className='flex flex-col justify-center items-center text-center rounded-lg border-blue-400 border-2 w-80 h-32'><h2>The responsible authoritis <br />processes the Complaint.</h2></div>
            <div className='flex flex-col justify-center items-center text-center rounded-lg border-blue-400 border-2 w-80 h-32'><h2>Your incentive is <br /> provided oncenthe <br /> Complaint processed</h2></div>
           </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-14'>
          <div><h2 className='text-[35px] font-bold mb-12'>What Our users have to Say</h2></div>
          <div className='flex justify-center items-center gap-16'>
          <div className='flex border shadow-lg  rounded-lg w-1/2 p-5 gap-4'>
                <div className='border-2 border-blue-500 rounded-full bg-gray-300 p-10'></div>
                <div><p>This is awesome webpage <br />Sipmlyfies the complete reagistration processes</p> <h3>Rokey</h3></div>
              </div>

           <div className='flex border shadow-lg  rounded-lg w-1/2 p-5 gap-4'>
              <div className='border-2 border-blue-500 rounded-full bg-gray-300 p-10'></div>
              <div><p>This is awesome webpage <br />Sipmlyfies the complete reagistration processes</p> <h3>Rokey</h3></div>
              </div>
          </div>
          </div>

          <div className='flex flex-col justify-center items-center '>
          <div className='flex gap-10 justify-center items-center mt-16'>

            <div className='w-24 h-24 border-2 border-blue-500 bg-gray-300 rounded-full'> </div> 
            
              <form action="" className='flex-1 relative'>
                <textarea name="feedback" id="" placeholder='Write your feedback'rows="8" cols="70" className='w-full h-36 p-2  border rounded shadow-lg resize-none text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                <button className='bg-blue-500 font-bold text-white rounded-lg absolute bottom-6 right-7 w-32 h-8 hover:bg-blue-600'>Submit</button>
              </form>
              </div>
          </div>
       
       <div className='flex justify-center items-center gap-7 mt-11 rounded-lg mb-16 ' >
        <div className='flex gap-8 shadow-lg p-4'>
          <div> <img src={ca} alt=""  className='rounded-md h-52 w-48'/> </div>
          <div className='flex flex-col justify-center items-center text-center'>
           <h1 className='text-[35px] mb-4'><IoIosMail /></h1>
           <h1 className='text-[30px] font-bold mb-4'>Suppourt Mail</h1>
           <p>For any assistence or inquries about <br /> repporting issue or using Civic Eye,<br /> Feel free to reach us</p>
           <h2 className='mt-4 text-[20px] text-blue-500 font-bold'>Supportciviceeye@gmail.com</h2>
          </div>
        </div>

        <div className='flex gap-8 shadow-lg p-4 rounded-lg'>
          <div><img src={ca} alt=""  className='rounded-md h-52 w-48'/></div>
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-[35px] mb-4 '><MdPhoneCallback /> </h1>
            <h1 className='text-[30px] font-bold mb-4'>Support Call</h1>
            <p>For any assistence or inquries about <br /> repporting issue or using Civic Eye,<br /> Feel free to reach us</p>
            <h2 className='mt-4 text-[20px] text-blue-500 font-bold'>+915265123</h2>
          </div>
        </div>
       </div>

   <div className=' bg-black text-white'>
      <div className='flex justify-center gap-52 pt-10 font-bold'>

        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='text-[35px] font-bold border-l-4 border-blue-500 pl-4'>Phone Number</h1>
          <p className='mt-3'>
             Military <br />
            (123) 456-225532 <br />
            (123) 456-225537
          </p>
          <p className='mt-3'>
            State Police <br />
            (654)551-955255
          </p>
          <p className='mt-3'>
            Fire Dipartment <br />
            (284)987-031520
          </p>
        </div>

        <div className='font-bold'>
          <h1 className='text-[35px] font-bold mb-10 border-l-4 border-blue-500 pl-4'>Contact Info</h1>

         <h2 className='flex text-[20px] items-center gap-4  mb-5'> <h3><FaMapLocationDot /></h3>
         <h3>Softronis</h3></h2>
          
         <h2 className='flex text-[20px] items-center gap-4 mb-5'> <h3><MdCall /></h3>
         <h3>(+12) 651-20564</h3></h2>

         <h2 className='flex text-[20px] items-center gap-4 '> <h3><IoIosMail /></h3>
         <h3>Softronis@gamil.com</h3></h2>
         
        </div>

        <div>
          <h1 className='text-[35px] font-bold mb-10 border-l-4 border-blue-500 pl-4'>Quick Links</h1>
          <ul className='list-disc ml-4'>
            <li>Home</li>
            <li>Complaits</li>
            <li>Register</li>
            <li>Login</li>
          </ul>
        </div>
      </div>

      <div className='mt-7 flex flex-col justify-center items-center'>
      <h3> © CivicEye 2025 <span className="mx-2">|</span> Empowering Citizens, Improving Communities.</h3>
      </div>

      </div>

        </div>
    </div>
  )
}

export default Firpage