import React, { useEffect, useRef } from 'react';
import './BarChart.css';
import { IoIosArrowDown } from 'react-icons/io';
import Chart from 'chart.js/auto';
import { BarData } from '../../utils/barData';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chartInstance = new Chart(ctx,BarData);

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className='bar-chart'>
      <div className='bar-head'>
        <h3>Overview</h3>
        <div className="quantity">
          <div>Quantity</div>
          <div><IoIosArrowDown /></div>
        </div>
      </div>
      <p>Monthly Earning</p>
      <div className='bar'>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default BarChart;
