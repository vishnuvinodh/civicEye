import React, { useEffect, useState } from 'react'
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
import { MdArrowDropDown, MdPhoneCallback } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FaUser, FaTrashAlt, FaSignOutAlt } from "react-icons/fa";
import { FaTrash, FaTriangleExclamation, FaTrafficLight,MdInsertDriveFile } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsThreeDots } from "react-icons/bs";
import { toast, ToastContainer } from 'react-toastify';


const Page = () => {
     const [open, setOpen] = useState(false);
  const [feedbackContent, setFeedbackContent] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const id = localStorage.getItem("id");
  const [stats, setStats] = useState({
  totalComplaints: 0,
  verifiedComplaints: 0,
  pendingComplaints: 0,
  rejectedComplaints: 0
});

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("usertype");
    localStorage.removeItem("email");
    navigate('/log');
  };

  const handleChange = (event) => {
    setFeedbackContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://civiceye-1-tqmf.onrender.com/user/feedbkk`, {
        feedcondent: feedbackContent,
        userId: id
      });
      toast.success("Feedback submitted successfully!");
      setFeedbackContent("");
      setFeedbackList(prev => [...prev, response.data]);
    } catch (error) {
      console.error("Feedback submission failed:", error);
      toast.error("Failed to submit feedback");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setOpen(!!token);
  }, []);

  useEffect(() => {
    const viewFeedback = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`https://civiceye-1-tqmf.onrender.com/user/feedview`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFeedbackList(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    viewFeedback();
  }, []);
  useEffect(() => {
  const fetchStats = async () => {
    try {
      const response = await axios.get('https://civiceye-1-tqmf.onrender.com/user/adminstats');
      console.log('Fetched stats:', response.data);

      setStats({
        totalComplaints: response.data.totalComplaints,
        verifiedComplaints: response.data.verifiedComplaints,
        pendingComplaints: response.data.pendingComplaints,
        rejectedComplaints: response.data.rejectedComplaints
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  fetchStats();
}, []);


  return (
    <div>
     
      <div className='flex gap-60 mt-5 mb-5 justify-center items-center'>
        <img src={l} alt="logo" className='w-64' />
        <div className='flex gap-28'>
          <Link to="/"><h2 className='hover:text-red-600 font-bold text-lg'>Home</h2></Link>
          <Link to="/usercomp"><h2 className='hover:text-red-600 font-bold text-lg'>MyComplaints</h2></Link>
          <Link to="/about" ><h2 className='hover:text-red-600 font-bold text-lg'>About</h2></Link>
          <h2 className='hover:text-red-600 font-bold text-lg'>Contact</h2>
        </div>

        <div className='relative'>
          <button onClick={() => setOpen(!open)} className='flex items-center bg-gray-100 p-2 rounded-lg w-24'>
            <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-400 text-white">
              <FaUser className="text-xl" />
            </div>
            <MdArrowDropDown className="text-2xl text-black" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-xl shadow-lg z-10 p-3 space-y-2">
              <Link to="/profile">
                <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <FaUser />
                  <span>Profile</span>
                </div>
              </Link>
              
              <div className="flex items-center space-x-2 cursor-pointer hover:text-green-700">
                <button onClick={logout} className="flex items-center space-x-2">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

     
      <Carousel autoPlay interval={1500} infiniteLoop showThumbs={false} showStatus={false}>
        {[q, r, s].map((imgSrc, idx) => (
          <div key={idx} className="flex justify-center">
            <img src={imgSrc} style={{ width: '100%' }} className="mx-auto h-[550px]" />
          </div>
        ))}
      </Carousel>

     
      <div className='flex flex-col justify-center items-center mt-7 shadow-lg rounded-xl w-[1300px] h-96 mx-auto'>
        <h1 className='text-[30px] font-bold mb-10'>Register Complaints</h1>
        <div className='flex justify-center gap-7 text-[25px] font-bold'>
          {[
            { icon: <FaTrash />, label: 'Waste Dumping' },
            { icon: <FaTriangleExclamation />, label: 'Public Nuisance' },
            { icon: <FaTrafficLight />, label: 'Traffic Violations' },
            {icon:<BsThreeDots />,label:'Other' },
          ].map(({ icon, label }, idx) => (
            <Link to="/report" key={idx}>
              <div className='flex flex-col justify-center items-center shadow-lg p-6 rounded-lg w-44 h-48 text-center'>
                <div className='mb-4'>{icon}</div>
                <h1>{label}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>

     
  <div className='flex flex-col justify-center items-center mt-20'>
  <h1 className='font-bold text-4xl mb-7'>Complaint Reports</h1>
   <div className='flex gap-9 text-[33px] font-bold'>
    <div className='flex flex-col items-center w-72 shadow-md rounded-xl p-10'>
    <IoShieldCheckmarkSharp />
    <h1 className='mt-2 text-center'>Complaints Registered</h1>
    <h1>{stats.totalComplaints}</h1>
  </div>
  <div className='flex flex-col items-center w-72 shadow-md rounded-xl p-10'>
  <BiMessageError />
  <h1 className='mt-2 mb-2'>Reports Filed</h1>
  <h1>{stats.verifiedComplaints}</h1>
</div>
<div className='flex flex-col items-center justify-center w-72 shadow-md rounded-xl p-10'>
  <PiMedalMilitaryFill />
  <h1 className=''>Rewards Distributed</h1>
  <h1>500 </h1>
</div>
<div className='flex flex-col items-center w-72 shadow-md rounded-xl p-10'>
  <GrUserPolice />
  <h1 className='mt-2'>Impact Made</h1>
  <h1>...</h1>
</div>

        </div>
      </div>

     
      <div className='flex flex-col justify-center items-center mt-56'>
        <h1 className='text-[40px] font-bold mb-14 font-serif'>What we do</h1>
        <div className='flex justify-center items-center gap-8'>
          {[
            "You Register The Complaint",
            "Our Team Verifies the Complaints and shares it with the Responsible Authorities",
            "The responsible authorities process the Complaint.",
            "Your incentive is provided once the Complaint is processed",
          ].map((text, idx) => (
            <div key={idx} className='flex flex-col justify-center items-center text-center border-blue-400 border-2 rounded-lg w-80 h-32 p-2'>
              <h2>{text}</h2>
            </div>
          ))}
        </div>
      </div>

     
      <div className='flex flex-col justify-center items-center mt-14'>
        <h2 className='text-[35px] font-bold mb-12'>What Our Users Say</h2>
        <div className='w-full flex justify-center'>
          <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}>
            {Array.isArray(feedbackList) && feedbackList.map((item, index) => (
              <div key={index} className='flex justify-center'>
                <div className='border-2 border-gray-500 w-64 p-6 rounded-xl text-center'>
                  <p>{item.feedcondent}</p>
                  <br />
                  <p>{item.user?.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

     
      <div className='flex justify-center items-center mt-16'>
  <form onSubmit={handleSubmit} className='flex-1 relative ml-10 max-w-xl'>
    <div className='relative'>
      <textarea
        name="feedcondent"
        rows="8"
        cols="70"
        placeholder='Write your feedback'
        className='w-full h-36 p-4 border rounded shadow-lg resize-none text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-36' // added pr-36 for padding right
        value={feedbackContent}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='absolute bottom-4 right-4 bg-blue-500 font-bold text-white rounded-lg px-4 py-2 hover:bg-blue-600'
      >
        Submit
      </button>
    </div>
  </form>
</div>


      
      <div className='flex justify-center items-center gap-7 mt-11 mb-16'>
        {[{
          icon: <IoIosMail />,
          title: "Support Mail",
          email: "Supportciviceeye@gmail.com"
        }, {
          icon: <MdPhoneCallback />,
          title: "Support Call",
          email: "+915265123"
        }].map(({ icon, title, email }, i) => (
          <div className='flex gap-8 shadow-lg p-4 rounded-lg' key={i}>
            <img src={ca} alt="" className='rounded-md h-52 w-48' />
            <div className='flex flex-col justify-center items-center text-center'>
              <h1 className='text-[35px] mb-4'>{icon}</h1>
              <h1 className='text-[30px] font-bold mb-4'>{title}</h1>
              <p>For any assistance or inquiries about reporting issues or using Civic Eye, feel free to reach us.</p>
              <h2 className='mt-4 text-[20px] text-blue-500 font-bold'>{email}</h2>
            </div>
          </div>
        ))}
      </div>

    
      <div className='bg-black text-white py-10'>
        <div className='flex justify-center gap-52 font-bold'>
          <div className='text-center'>
            <h1 className='text-[35px] border-l-4 border-blue-500 pl-4'>Phone Number</h1>
            <p className='mt-3'>Military<br />(123) 456-225532<br />(123) 456-225537</p>
            <p className='mt-3'>State Police<br />(654) 551-955255</p>
            <p className='mt-3'>Fire Department<br />(284) 987-031520</p>
          </div>

          <div>
            <h1 className='text-[35px] mb-10 border-l-4 border-blue-500 pl-4'>Contact Info</h1>
            <div className='text-[20px] mb-5 flex items-center gap-4'><FaMapLocationDot />Softronis</div>
            <div className='text-[20px] mb-5 flex items-center gap-4'><MdCall />(+12) 651-20564</div>
            <div className='text-[20px] flex items-center gap-4'><IoIosMail />Softronis@gmail.com</div>
          </div>

          <div>
            <h1 className='text-[35px] mb-10 border-l-4 border-blue-500 pl-4'>Quick Links</h1>
            <ul className='list-disc ml-4'>
              <li>Home</li>
              <li>Complaints</li>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>
        </div>

        <div className='mt-7 text-center'>
          <h3>© CivicEye 2025 | Empowering Citizens, Improving Communities.</h3>
        </div>
      </div>
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default Page