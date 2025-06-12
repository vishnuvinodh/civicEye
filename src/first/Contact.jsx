import React from 'react';
import h from './Logo.png'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-10 px-5 md:px-20">
      <Link to="/page" ><button className='w-28 h-9 bg-blue-400 text-white rounded-md mb-6 border'>Back</button></Link>

     <h1 className='w-64 mb-10'><img src={h} alt="" /></h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
       
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 inline-block">Emergency Contacts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-blue-600">Military</h3>
              <p>(123) 456-225532</p>
              <p>(123) 456-225537</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-600">State Police</h3>
              <p>(654) 551-955255</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-600">Fire Department</h3>
              <p>(284) 987-031520</p>
            </div>
          </div>
        </div>

     
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 inline-block">Contact Info</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">📍</span>
              <p className="font-medium">Softronis</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">📞</span>
              <p className="font-medium">(+12) 651-20564</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✉️</span>
              <p className="font-medium">Softronis@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

  
      <div className="text-center  text-sm text-gray-600 mt-36">
        © CivicEye 2025 | Empowering Citizens, Improving Communities.
      </div>
    </div>
  );
};

export default Contact;
