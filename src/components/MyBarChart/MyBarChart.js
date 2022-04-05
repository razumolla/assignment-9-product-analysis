import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='flex'>
            <div className='p-10'>
                <h2 className='text-3xl pb-10 pl-20'> Investment Vs Revenue</h2>
                <BarChart width={550} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className='p-10'>
                <h2 className='text-3xl pb-10 pl-20'> Investment Vs Revenue</h2>

                <PieChart width={550} height={250}>
                    <Tooltip />
                    <Pie data={data} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>

        </div>
    );
};

export default MyBarChart;