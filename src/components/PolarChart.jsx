import {
    ArcElement,
    Chart as ChartJS,
    PolarAreaController,
    RadialLinearScale
} from 'chart.js';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
ChartJS.register(
    PolarAreaController,
    ArcElement,
    RadialLinearScale
)


const PolarChart = () => {

    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue',
            'Orange',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14, 19],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(201, 205, 235)',
            ]
        }]
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    font: {
                        size: 14
                    },
                    padding: 0
                }
            }
        }


    };




    return (
        <div className='card bg-base-100 w-[50%] py-3 rounded-md'>
            <div className="cardHeader pb-3 px-4 flex justify-evenly">
                <Link className='btn w-[102px] h-[38px] rounded-full btn-outline'>Model</Link>
                <Link className='btn w-[102px] h-[38px] rounded-full bg-[#14314E]'>Style</Link>
                <Link className='btn w-[120px] h-[38px] rounded-full btn-outline'>Contribution</Link>
            </div>
            <PolarArea
                data={data}
                options={options}
            ></PolarArea>
        </div>
    );
};

export default PolarChart;