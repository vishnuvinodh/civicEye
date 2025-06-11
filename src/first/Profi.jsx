import React, { useEffect, useState } from 'react'
import k from './Logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profi = () => {
    const [formData, setFormData] = useState({ name: '',  mobile: '',email: '',  DOB: '',password: '', state: '', addrass: '', prooftype: '', proofnum: ''});
  const[data,setdata]=useState([])
  const id=localStorage.getItem("id")
  const token=localStorage.getItem("token")

  useEffect(()=>{

    const flatchdata=async()=>{
        const response=await axios.get(`https://civiceye-1-tqmf.onrender.com/user/viweuser/${id}`);
        setFormData(response.data)
    };
    flatchdata()
  },[])
  console.log(data);
   
  
   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async () => {
    try {
      await axios.put(`https://civiceye-1-tqmf.onrender.com/user/updateuser/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success
      ("User updated successfully!");
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Failed to update user.");
    }
  };


  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className='w-full max-w-5xl border shadow-md rounded-xl p-10'>
        <h1 className='w-56 h-14 mb-16'><img src={k} /></h1>
         <form className='flex gap-16' onSubmit={handleSubmit}>
          
          <div className='border-r-2 border-black w-1/2'>
            <div className='flex flex-col'>
              <input  type="text"  name="name"  placeholder='Full name'  className='w-80 border rounded-lg pl-4 pb-2 pt-2 mb-8'   value={formData.name} onChange={handleChange} />
              <input type="number"  name="mobile"  placeholder='Phone Number' className='w-80 border rounded-lg pl-4 pb-2 pt-2 mb-8' value={formData.mobile} onChange={handleChange} />
              <input type="email"name="email" placeholder='e-mail'  className='w-80 border rounded-lg pl-4 pt-2 pb-2 mb-8'  value={formData.email} onChange={handleChange}  />
              <input  name="DOB" placeholder='D-O-B' className='w-80 border rounded-lg pl-4 pb-2 pt-2 mb-8'  value={formData.DOB?.slice(0, 10)} onChange={handleChange}  type="date" />
              
            </div>
          </div>

          <div className='w-1/2'>
            <div className='flex flex-col'>
              <select name="state"  onChange={handleChange}  className='w-80 border rounded-lg pl-4 pt-2 pb-2 mb-8'  value={formData.state}>
                <option disabled value="">Select State</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Goa">Goa</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Haryana">Haryana</option>
              </select>
              <textarea  name="addrass" onChange={handleChange}  className='resize-none w-80 h-28 border rounded-lg pl-4 pt-2 pb-2 mb-8' placeholder='Address' value={formData.addrass} />
              <select   name="prooftype"  onChange={handleChange} className='w-80 border rounded-lg pl-4 pt-2 pb-2 mb-8' value={formData.prooftype || ''} >
                <option disabled value="">Select ID Proof</option>
                <option value="Adhar">Aadhar</option>
                <option value="Pan Card">Pan Card</option>
                <option value="Driving Licence">Driving Licence</option>
              </select>
              <input   type="text" name='proofnum' onChange={handleChange}  placeholder='Proof Number' className='w-80 border rounded-lg pl-4 pt-2 pb-2 mb-8' value={formData.proofnum} />
            </div>

          </div>

        </form>
        <div className='flex gap-6 justify-center mt-9 pr-16'>
            <button className='border rounded-lg w-32 h-8 bg-blue-500 text-white' type='submit'onClick={handleSubmit} >Edit</button>
            <button className='border rounded-lg w-32 h-8 8 bg-blue-500 text-white' onClick={handleSubmit} >Submit</button>
        </div>
    </div>
    <ToastContainer position='top-center'/>
    </div>
  )
}

export default Profi