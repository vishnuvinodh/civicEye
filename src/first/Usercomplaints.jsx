import React, { useEffect, useState } from 'react'
import gf from './Logo.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Usercomplaints = () => {

  const[data,setdata]=useState([])
  

  const id=localStorage.getItem("id")
  const token=localStorage.getItem("token")

  const uscomp = async () => {
  try {
    let respons = await axios.get(`http://localhost:5002/user/viwcomp/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("API Response:", respons.data);
    setdata(respons.data || []);
 
  } catch (error) {
    console.error("Error fetching complaints:", error);
    setdata([]); 
  }
};


  useEffect(()=>{
    uscomp();
  },[])
  console.log(data);
  

  return (
    <div className=" mt-10 p-4">
      <div className="flex justify-center mb-6">
       <Link to="/page"> <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"  > Back </button></Link>
      </div>
     <table className="w-full bg-white shadow-lg rounded-lg">
  <thead className="bg-blue-300 text-white shadow-lg">
    <tr>
      <th className="px-8 py-3 text-center">Description</th>
      <th className="px-8 py-3 text-center">Complaint Type</th>
      <th className="px-8 py-3 text-center">Location</th>
      <th className="px-8 py-3 text-center">Status</th>
      <th className="px-8 py-3 text-center">Proof</th>
    </tr>
  </thead>

  <tbody>
    {data.length > 0 ? (
      data.map((item, index) => (
        <tr key={index} className="border-b">
          <td className="p-2 text-center">{item.description}</td>
          <td className="p-2 text-center">{item.complainttype}</td>
          <td className="p-2 text-center">{item.location}</td>
          <td className="p-2 text-center">{item.status}</td>
          <td className="p-2 text-center">
            <img
              src={`http://localhost:5002/uploads/${item.proof}`}
              alt="proof"
              className="h-20 w-20 object-cover rounded-md mx-auto"
            />
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="5" className="text-center py-4 text-gray-500">
          No complaints found.
        </td>
      </tr>
    )}
  </tbody>
</table>

    </div>

  )
}

export default Usercomplaints