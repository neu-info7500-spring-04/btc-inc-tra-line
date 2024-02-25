import React, { useEffect, useState } from 'react';

const TransactionInfo = () => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/stats');
            const data = await response.json();
            setStats(data);
        };

        fetchData();
        const interval = setInterval(fetchData, 60000); // Fetch new data every minute

        return () => clearInterval(interval);
    }, []);

    // Display the stats information using the stats state
    return (
        <div>
            {/* Render your stats data here */}
            <p>Total Transactions: {stats.totalTransactions}</p>
            {/* Add more stats display */}
        </div>
    );
};

export default TransactionInfo;
