
// TODO: This component display a line chart of incoming transanctions of Bitcoin
//  Within the last 2 hours, shown by 15 minutes intervals
//  The chart is updated every 1 minute
//  Y-axis should be dynamically based on the highest vb/s within the data to make sure the chart is always showing the full range of data
//  X-axis should be the time of the transaction


import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

interface IncomingTransactionsProps {
    data: any;
}


const IncomingTransactions: React.FC<IncomingTransactionsProps> = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('');
            const data = await result.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Bitcoin Incoming Transaction Explorer</h1>
            <Line data={data} />
        </div>
    );
}