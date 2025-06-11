import React from 'react'
import './gu1.css'

const S1 = () => {
  return (
    <div>
        <div className='gu0 flex gap-52 mt-5 mb-5'>
            <div className='gu1 flex text-[40px] ml-14'><h2><b>Civic</b></h2><h2 className='text-blue-400'><b>EYE</b></h2></div>

            <div className='gu2 flex gap-32 mt-3 text-[20px]'>
                <div><a href=""><b>Home</b></a></div>
                <div><a href=""><b>MyCompliaits</b></a></div>
                <div><a href=""><b>About</b></a></div>
                <div><a href=""><b>Contact</b></a></div>
            </div>
            
            <div>
                <button className='gu w-28 h-14 bg-slate-300 rounded-lg text-[25px]' ><b>Login</b></button>
            </div>
        </div>
    </div>
  )
}

export default S1