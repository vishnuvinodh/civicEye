import axios from 'axios';
import React, { PureComponent, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';


const Usermanag = () => {
 
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
    const [currentpage,setCurrentpage]=useState(0)
      const [itemperpage]=useState(5)

  const adcom = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/user/admincomplaint`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch admin complaints:", error);
    }
  };

  useEffect(() => {
    adcom();
  }, []);
  const indexoflastitem=(currentpage+1)*itemperpage;
  const indexofFirstitem=indexoflastitem-itemperpage;
  const currentMeeting=data.slice(indexofFirstitem,indexoflastitem)

  const handlechange=({selected})=>setCurrentpage(selected);
  return (
    <div className='flex  flex-col p-10'>
              
        <div className='  rounded-lg p-10'>      
        
        <table className="w-full text-sm  text-black mt-6">
        <thead className="text-xs uppercase bg-gray-100 text-black">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Address</th>
            <th className="px-6 py-3">ID Proof</th>
          </tr>
        </thead>
        <tbody>
          {currentMeeting.map((item,index)=>(
            <tr key={index} className='border-b'>
             <td className="px-6 py-4  border">{item.user?.name}</td>
             <td className="px-6  border py-4">{item.user?.email}</td>
             <td className="px-6  border py-4">{item.user?.mobile}</td>
             <td className="px-6  border py-4">{item.user?.addrass}</td>
             <td className="px-6  border py-4">{item.user?.prooftype}</td>
             
           </tr>
          ))}
        </tbody>

        </table>
        <div className=' justify-center mt-5'>
        <ReactPaginate
         pageCount={Math.ceil(data.length / itemperpage)}
         pageRangeDisplayed={7}
         marginPagesDisplayed={2}
         onPageChange={handlechange}
         containerClassName="flex justify-center gap-2 mt-4"
         activeClassName="bg-blue-500 text-white rounded px-3 py-1"
         pageClassName="px-3 py-1 rounded border border-gray-300"
         previousLabel="<"
         nextLabel=">"
         previousClassName="px-3 py-1 rounded border border-gray-300"
         nextClassName="px-3 py-1 rounded border border-gray-300"
        disabledClassName="opacity-50 cursor-not-allowed"/>
      </div>
         
       </div>
        
    </div>
  )
}

export default Usermanag