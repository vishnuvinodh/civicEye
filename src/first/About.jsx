import React from 'react'
import ga from './Logo.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='p-10'> 
     <Link to="/page" ><button className='w-28 h-9 bg-blue-400 text-white rounded-md mb-14 border'>Back</button></Link>

        <div className='flex flex-col justify-center items-center align-top'>
            <h1 className='w-52 ' ><img src={ga} alt="" className='mb-9' /></h1>
        </div>
        <div>
            <p className='text-[25px] text-center '><b>Civic Eye</b> is a comprehensive web platform designed to empower citizens to report and track issues related to waste dumping, pollution, and other public nuisances in their communities. By providing an easy-to-use interface for lodging complaints, sorting them by type or date, and monitoring their resolution status, Civic Eye aims to promote accountability, transparency, and faster action by local authorities. The platform fosters active civic participation and helps build cleaner, safer, and more responsible urban spaces for everyone.</p>
        </div>
          <div className="text-center  text-sm text-gray-600 mt-64 text-[16px]">
        © CivicEye 2025 | Empowering Citizens, Improving Communities.
      </div>
    </div>
  )
}

export default About