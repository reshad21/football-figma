import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)


const PolarChart = () => {

    const data = {
        labels: ['monday', 'saturday', 'sunday', 'friday', 'thursday'],
        datasets: [
            {
                label: 'level of thiccness',
                data: [32, 45, 12, 76, 69],
                backgroundColor: [
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth: 4,
                borderColor: 'black'
            }
        ]
    }

    const options = {}




    return (
        <div>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    );
};

export default PolarChart;