import express from 'express';
import http from 'http';
import {Server} from 'ws';
import mempoolJS from "@mempool/mempool.js";

const app = express();
const server = http.createServer(app);
const wss = new Server({server});

let statsData = {};
let chartData = [];

const initMempool = async () => {
    const {bitcoin: {websocket}} = mempoolJS({
        hostname: 'mempool.space'
    });

    const ws = websocket.initServer({
        options: ["blocks", "stats", "mempool-blocks", "live-2h-chart"],
    });

    ws.on("message", function incoming(data) {
        const res = JSON.parse(data.toString());
        // Store the relevant data in variables
        if (res.mempoolInfo) {
            statsData = res.mempoolInfo;
        }
        if (res["live-2h-chart"]) {
            chartData = res["live-2h-chart"];
        }
        // Broadcast to all connected frontend clients
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
};

initMempool().then(r => console.log('Mempool initialized'));

// REST API endpoints
app.get('/api/stats', (req, res) => {
    res.json(statsData);
});

app.get('/api/chart', (req, res) => {
    res.json(chartData);
});

server.listen(3001, () => {
    console.log('Server started on port 3001');
});
