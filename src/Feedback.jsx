import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Feedback = () => {
  const [feedbackdata, setFeedbackdata] = useState([]);
   const [currentpage,setCurrentpage]=useState(0)
    const [itemperpage]=useState(5)

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const response = await axios.get('https://civiceye-1-tqmf.onrender.com/user/feedview', {
          headers: { Authorization: `Bearer ${token}` } 
        });
        setFeedbackdata(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);
  const indexoflastitem=(currentpage+1)*itemperpage;
  const indexofFirstitem=indexoflastitem-itemperpage;
  const currentMeeting=feedbackdata.slice(indexofFirstitem,indexoflastitem)

  const handlechange=({selected})=>setCurrentpage(selected);

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-5'>User Feedbacks</h1>
      <table className="w-full text-sm text-left text-black ">
        <thead className="text-xs uppercase bg-gray-100 text-black">
          <tr>
            <th className="py-2 px-4 ">Name</th>
            <th className="py-2 px-4 ">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbackdata.length > 0 ? (
            feedbackdata.map((item, index) => (
              <tr key={index} className="">
                <td className="py-2 px-4 border">{item.user?.name}</td>
                <td className="py-2 px-4 border">{item.feedcondent}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center py-4">No feedback available.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className=' justify-center mt-5'>
        <ReactPaginate
         pageCount={Math.ceil(feedbackdata.length / itemperpage)}
         pageRangeDisplayed={8}
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
  );
};

export default Feedback;
