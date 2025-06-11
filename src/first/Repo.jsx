import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Repo = () => {
  const [formdata, setFormData] = useState({ description: '',complainttype: '',location: '',  file: null, userId: localStorage.getItem("id") || ''  });
  const id=localStorage.getItem("id")

  const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

   const handleFileChange = (event) => {
    setFormData(prev => ({
      ...prev, file: event.target.files[0] }));
  };
  
   const handlesubmit = async (event) => {
    event.preventDefault();
    
    const data = new FormData();
    data.append('userId',formdata.userId)
      data.append('description', formdata.description);
      data.append('complainttype', formdata.complainttype);
      data.append('location', formdata.location);
      data.append('proof', formdata.file);
      console.log(data);
      

    try {
      await axios.post('https://civiceye-1-tqmf.onrender.com/user/regcomplaint', data);

      toast.success("Complaint submitted!");
    } catch (erorr) {
      console.error(erorr);
      toast.error("Failed to submit complaint");
    }
  };

  return (
     <div className='min-h-screen flex flex-col  items-center justify-center'>
      <div className='w-full max-w-5xl border shadow-md rounded-xl flex-col flex p-10'> 
      
      <div className='flex flex-col  items-center justify-center mb-8'>
        <h1 className='text-[30px] font-bold'>Report Issues Seamlssly</h1>
     </div>

     <div>
        <p className='text-center font-bold'>Our platform empower users to submit Complaints with ease, offering tools to uploade multimedia for <br />
        comprehensive issue reporting </p>
     </div>
      
       <div className='flex flex-col justify-center items-center mt-10'>
        <form action="" onSubmit={handlesubmit}>
        <div className='mb-7'>
            <label htmlFor="" className='font-bold'>description</label><br />
            <input type="text" onChange={handleChange} name='description' className='w-[600px] border p-2 rounded-lg h-12' />
        </div>
        <div className='mb-7'>
            <label htmlFor="" className='font-bold'>Complaint Type</label><br />
            <select name="complainttype" onChange={handleChange} className='w-[600px] border rounded-lg p-2  h-12'>
                    <option selected disabled value="">Choose</option>
                    <option value="Waste Dumpling">Waste Dumpling</option>
                    <option value="Traffic Violations">Traffic Violations</option>
                    <option value="Public Nuisance">Public Nuisance</option>
                    <option value="Other">Other</option>

             </select>
        </div> 
        <div className='mb-7'>
            <label htmlFor="" className='font-bold'>location</label><br />
            <input type="text" name='location' onChange={handleChange} className='w-[600px] border p-2 rounded-lg h-12' />
        </div>
        <div className='mb-7'>
            <label htmlFor="" className='font-bold'>Proof</label><br />
            <input type="file" accept="image/*,video/*" name='proof' onChange={handleFileChange}  className='  hover:bg-blue-200  w-full border p-2 bg-blue-500 rounded-lg h-12' />
        </div>

        <div className='flex gap-10 justify-center items-center'>
            <button className='h-12 bg-blue-700 w-[275px] rounded-lg  hover:bg-blue-200 hover:text-blue-600 ' type='submit'>Submit</button>
            <button className='h-12 bg-blue-700 w-[275px] rounded-lg  hover:bg-blue-200 hover:text-blue-600' type='submit'>Cancel</button>
        </div>
        </form>
       </div>
   
     </div> 
     <ToastContainer position='top-center'/>
    </div>
        
  )
}

export default Repo