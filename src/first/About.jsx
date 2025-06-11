import React from 'react'
import ga from './Logo.png'

const About = () => {
  return (
    <div className='p-10'> 
        <div>
            <h1 className='w-52'><img src={ga} alt="" className='mb-5' /></h1>
        </div>
        <div>
            <p><b>Civic Eye</b> is a comprehensive web platform designed to empower citizens to report and track issues related to waste dumping, pollution, and other public nuisances in their communities. By providing an easy-to-use interface for lodging complaints, sorting them by type or date, and monitoring their resolution status, Civic Eye aims to promote accountability, transparency, and faster action by local authorities. The platform fosters active civic participation and helps build cleaner, safer, and more responsible urban spaces for everyone.</p>
        </div>
    </div>
  )
}

export default About