import React, { useState, useEffect } from 'react'
import './DonutChart.css'

const DonutChart = () => {
    const array = [20, 40, 10, 20];
    const segmentLabels = ['content1', 'content2', 'content1', 'content2'];
    const segmentColors = ['fff1c9', 'f7b7a9', 'ea5f89', 'e1e1e1'];
    const [newArray, setNewArray] = useState([]);
    const [,setDashArray] = useState([]);

    useEffect(() => {
        calculateData();
    });

    const calculateData = () => {
        const arraySum = array.reduce((x, y) => x + y, 0);
        const calculatedArray = array.map((value) => (value * 100) / arraySum);

        const calculatedDashArray = calculatedArray.map((value, index) => {
            return value;
        });

        setNewArray(calculatedArray);
        setDashArray(calculatedDashArray);
    };

    const describeSegment = (index) => {
        let startAngle = 0;
        for (let i = 0; i < index; i++) {
            startAngle += (newArray[i] / 100) * 360; // Convert percentage to degrees
        }

        const endAngle = startAngle + (newArray[index] / 100) * 360;

        const startX = 21 + 15.91549430918954 * Math.cos((startAngle - 90) * (Math.PI / 180));
        const startY = 21 + 15.91549430918954 * Math.sin((startAngle - 90) * (Math.PI / 180));
        const endX = 21 + 15.91549430918954 * Math.cos((endAngle - 90) * (Math.PI / 180));
        const endY = 21 + 15.91549430918954 * Math.sin((endAngle - 90) * (Math.PI / 180));

        const largeArcFlag = newArray[index] > 50 ? 1 : 0;
        return `M ${startX} ${startY} A 15.91549430918954 15.91549430918954 0 ${largeArcFlag} 1 ${endX} ${endY}`;
    };

    const getTotal = () => {
        return array.reduce((total, count) => total + count, 0);
    };

    return (
        <div className='donut-chart'>
            
                <h3>Customers</h3>
                <p>Customers that buy products</p>
            <div className='don'>
            <div className="donut-chart__content">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 42 42"
                    className="donut-chart__donut"
                    role="img"
                >
                    {/* Donut ring */}
                    <circle
                        className="donut-chart__donut-ring"
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#ffff"
                        strokeWidth="10"
                        role="presentation"
                    ></circle>

                    {/* Donut segments */}
                    {newArray.map((segment, i) => (
                        <path
                            key={i}
                            className="donut-chart__donut-segment"
                            fill="transparent"
                            stroke={`#${segmentColors[i]}`}
                            strokeWidth="4"
                            d={describeSegment(i)}
                        >
                            <title>{segmentLabels[i]}</title>
                        </path>
                    ))}



                    {/* Donut hole */}
                    <circle
                        className="donut-chart__donut-hole"
                        cx="21"
                        cy="21"
                        r="5"
                        fill="#fff"
                        role="presentation"
                        style={{ pointerEvents: 'none' }}
                    ></circle>

                    {/* Unused 10% */}
                    <g className="donut-chart__chart-text">
                        <text x="50%" y="50%" className="donut-chart__chart-number">
                            {getTotal()}%
                        </text>
                        <text x="50%" y="50%" className="donut-chart__chart-label">Total</text>
                    </g>
                </svg>
            </div>
        </div>
        </div>
    )
}

export default DonutChart