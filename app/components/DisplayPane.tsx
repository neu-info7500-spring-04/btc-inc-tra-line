import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Line} from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["labels"],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }, {
        label: 'My Second Dataset',
        data: [65, 45, 99, 1, 24, 20, 90],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
}

export function DisplayPane() {
    return (
        <Line data={data}/>
    )
}
