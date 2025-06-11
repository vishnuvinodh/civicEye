import React, { PureComponent, useEffect, useState } from 'react';
import axios from 'axios';
import ca from './Logo.png';
import { VscGraphLine } from "react-icons/vsc";
import { IoPerson } from "react-icons/io5";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { BiSolidFileBlank } from "react-icons/bi";
import { BsPersonFillGear } from "react-icons/bs";
import { Route, Routes } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { CgPlayListRemove } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class ChartComponent extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

class PieChartComponent extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            paddingAngle={0}
            dataKey="count"
            nameKey="district"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

const Overv = () => {
  const [stats, setStats] = useState({
    totalComplaints: 0,
    verifiedComplaints: 0,
    pendingComplaints: 0,
    rejectedComplaints: 0,
    complaintsByMonth: [],
    complaintsByDistrict: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5002/user/adminstats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className='flex p-10'>
      <div className=' bg-sky-100 rounded-lg p-'>
        <h1 className=' font-bold mb-7'>Welcome, Admin Name </h1>

        <div className='flex gap-8 ml-1'>
          <div className='flex gap-5'>
            <div className='bg-white p-3 rounded-lg w-56 h-28'>
              <h1 className='flex justify-center items-center mb-4 gap-7 text-[18px] font-bold'>
                <h2>This month</h2>
                <FaCalendarAlt />
              </h1>
              <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>
                {stats.totalComplaints}
              </h1>
            </div>

            <div className='bg-white p-3 rounded-lg w-56 h-28'>
              <h1 className='flex justify-center items-center mb-4 gap-7 text-[18px] font-bold'>
                <h2>Verified cases</h2>
                <IoCheckmarkCircleOutline />
              </h1>
              <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>
                {stats.verifiedComplaints}
              </h1>
            </div>
          </div>

          <div className='flex gap-5'>
            <div className='bg-white p-3 rounded-lg w-56 h-28'>
              <h1 className='flex justify-center items-center mb-4 text-[18px] font-bold gap-7'>
                <h2>Pending</h2>
                <LuClock />
              </h1>
              <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>
                {stats.pendingComplaints}
              </h1>
            </div>

            <div className='bg-white p-3 rounded-lg w-56 h-28'>
              <h1 className='flex justify-center items-center mb-4 text-[18px] font-bold gap-7'>
                <h2>Rejected</h2>
                <CgPlayListRemove />
              </h1>
              <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>
                {stats.rejectedComplaints}
              </h1>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-9 mt-16'>
          <div className='w-1/2 bg-white flex flex-col justify-center items-center rounded-lg p-4 h-96'>
            <h1 className='mb-4 text-[19px] font-bold '>Month Review</h1>
            <ChartComponent data={stats.complaintsByMonth} />
            <p>
              <b className='text-[17px]'>30% Registerd</b>{' '}
              <span className='text-[14px]'>30% more complaits in this mouth</span>
            </p>
            <button className='text-blue-600 bg-blue-200 w-56 rounded-md mt-4 h-9'>
              Deateails
            </button>
          </div>

          <div className='w-1/2 bg-white flex flex-col justify-center items-center rounded-lg p-4 h-96'>
            <h2 className='font-bold text-[18px] '>March 2025</h2>
            <PieChartComponent data={stats.complaintsByDistrict} />
            <div className='flex gap-24 font-bold text-[15px]'>
              <div>
                {stats.complaintsByDistrict.slice(0, 2).map((item, index) => (
                  <h3
                    key={index}
                    className='flex justify-center items-center '
                  >
                    <span>
                      <GoDotFill
                        className={`text-${COLORS[index % COLORS.length].replace(
                          '#',
                          ''
                        )}`}
                      />
                    </span>
                    {item.district}
                  </h3>
                ))}
              </div>

              <div>
                {stats.complaintsByDistrict.slice(2, 4).map((item, index) => (
                  <h3
                    key={index + 2}
                    className='flex justify-center items-center '
                  >
                    <span>
                      <GoDotFill
                        className={`text-${COLORS[(index + 2) % COLORS.length].replace(
                          '#',
                          ''
                        )}`}
                      />
                    </span>
                    {item.district}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overv;
