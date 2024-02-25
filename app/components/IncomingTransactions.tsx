import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

const IncomingTransactions = () => {
    // State for the chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Incoming Transactions',
                data: [],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/chart');
            const data = await response.json();

            // Assuming 'data' is structured correctly for Chart.js (labels and datasets)
            setChartData({
                ...chartData, // Spread the existing state
                labels: data.labels,
                datasets: [{
                    ...chartData.datasets[0], // Spread the existing dataset
                    data: data.data // Assuming your API returns a 'data' array for the dataset
                }]
            });
        };

        fetchData();
        const interval = setInterval(fetchData, 300000); // Fetch new data every 5 minutes

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Line data={chartData} options={{
                // You can customize your options here
                responsive: true,
                scales: {
                    x: {
                        // x-axis is time, with 15 minutes interval
                        type: 'time',
                        time: {
                            unit: 'minute',
                            stepSize: 15
                        }
                    },
                    y: {
                        // y-axis is virtual bytes measurement, so dynamic based on the highest and lowest transaction within the last 2 hours, coming from the dataset
                        type: 'linear',
                        ticks: {
                            min: Math.min(...chartData.datasets[0].data) - 1000,
                            max: Math.max(...chartData.datasets[0].data) + 1000
                        },
                        title: {
                            display: true,
                            text: 'Virtual Bytes'
                        }
                    }
                }
            }}/>
        </div>
    );
};

export default IncomingTransactions;
