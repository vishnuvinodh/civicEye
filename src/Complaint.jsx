import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDownload } from "react-icons/md";
import ReactPaginate from "react-paginate"

const Complaints = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [currentpage,setCurrentpage]=useState(0)
  const [itemperpage]=useState(5)

  const adcom = async () => {
    try {
      const response = await axios.get(`https://civiceye-1-tqmf.onrender.com/user/admincomplaint`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const sortDate = response.data.sort((a, b) => new Date(b.complaints.createdAt) - new Date(a.complaints.createdAt));
       setData(sortDate)
      console.log(sortDate);
      
    } catch (error) {
      console.error("Failed to fetch admin complaints:", error);
    }
  };

  const updateStatus = async (complaintId, newStatus) => {
    try {
      await axios.put(`https://civiceye-1-tqmf.onrender.com/user/admincomplaint/status/${complaintId}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` }
        }

      );
      adcom(); 
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  useEffect(() => {
    adcom();
  }, []);
  const indexoflastitem=(currentpage+1)*itemperpage;
  const indexofFirstitem=indexoflastitem-itemperpage;
  const currentMeeting = data.slice(0, 4);


  const handlechange=({selected})=>setCurrentpage(selected);
  

  

  return (
    <div className='p-7'>
      
      <table className="w-full text-sm border text-left text-black mt-6">
        <thead className="text-xs uppercase bg-gray-100 text-black">
          <tr>
            <th className="px-6 py-3">Date & Time</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Uploader</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Proof</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentMeeting.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-6 py-4  border">{new Date(item.complaints.createdAt).toLocaleString()}</td>
              <td className="px-6 py-4  border">{item.complaints.description}</td>
              <td className="px-6 py-4  border">{item.user?.name}</td>
              <td className="px-6 py-4  border">{item.complaints.status}</td>
              <td className="px-6 py-4  border">
                {item.complaints.proof ? (
                  
                  <a  href={`http://localhost:5002/uploads/${item.complaints.proof}`} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`http://localhost:5002/uploads/${item.complaints.proof}`}
                      alt="Proof"
                      className="h-20 w-20 object-cover rounded border"
                    />
                  </a>
                ) : (
                  "No Proof"
                )}
              </td>
              <td className="px-6 py-4">
                <div className='flex gap-2'>
                  <button
                    className='bg-red-600 text-white px-3 py-1 rounded'
                    onClick={() => updateStatus(item.complaints._id, 'rejected')}
                  >
                    Reject
                  </button>
                  <button
                    className='bg-green-500 text-white px-3 py-1 rounded'
                    onClick={() => updateStatus(item.complaints._id, 'verified')}
                  >
                    Resolve
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=' justify-center mt-5'>
    <ReactPaginate
      pageCount={Math.ceil(data.length / itemperpage)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      onPageChange={handlechange}
      containerClassName="flex justify-center gap-2 mt-4"
      activeClassName="bg-blue-500 text-white rounded px-3 py-1"
      pageClassName="px-3 py-1 rounded border border-gray-300"
      previousLabel="<"
      nextLabel=">"
      previousClassName="px-3 py-1 rounded border border-gray-300"
      nextClassName="px-3 py-1 rounded border border-gray-300"
      disabledClassName="opacity-50 cursor-not-allowed"
/>


      

      </div>
    </div>
  );
};

export default Complaints;
