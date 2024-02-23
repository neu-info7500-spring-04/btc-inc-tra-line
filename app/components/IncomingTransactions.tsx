import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

interface IncomingTransactionsProps {
    // Add any other props your IncomingTransactions might need, with their corresponding types
}

const IncomingTransactions: React.FC<IncomingTransactionsProps> = () => {
    const [chartData, setChartData] = useState({
        labels: ['20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30'],
        datasets: [
            {
                label: 'Incoming Transactions',
                data: [1000, 1500, 2000, 1750, 1250, 750, 500],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        // Fetch your data and update the chartData state accordingly
        const fetchData = async () => {
            // ... your data fetching logic here
            // For example, you might make an API call to get real-time transaction data
            const response = await fetch('/api/inc-transac');
            const data = await response.json();
            // Update the chartData state with the fetched data
            // setChartData({
            // //TODO put received data into the chartData
            // });
        };

        fetchData();

    }, []);

    return (
        <div className="IncomingTransactions">
            <div className="IncomingTransactions-header">
                <h2>Incoming Transactions</h2>
                <div className="IncomingTransactions-status">
                    {/* Add any status indicators as needed */}
                </div>
            </div>
            <div className="IncomingTransactions-body">
                <Line data={chartData} options={{}} />
            </div>
        </div>
    );
};

export default IncomingTransactions;
