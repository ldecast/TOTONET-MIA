require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express');
const cors = require('cors');
const http = require('http');
// const Router = require('./endpoints');

/* init */
const PORT = process.env.PORT || 8080;
const app = express();
// app.use(express.static(__dirname + '/public/build'));

const server = http.createServer(app);

/* Middlewares */
app.use(express.json());
app.use(cors());

/* Router */
// app.use('/home', Router);
// app.use('/admin', Admin);

/* Inicialización de socket.io */
const io = require('./config/socket').init(server);
io.on('connection', (socket) => {
    console.log('A user is connected');
    socket.on('message', (message) => {
        console.log(`message from ${socket.id} : ${message}`);
    });
    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
});

/* Inicialización de la base de datos */
const connection = require('./config/db');
connection.init();

app.get('/', (req, res) => {
    res.send('Hello from Node JS server!');
});

/* Starting */
server.listen(PORT, () => {
    console.log(`Server is running on port '${PORT}'.`);
});

//do something when app is closing
process.on('exit', exitHandler);

//catches ctrl+c event
process.on('SIGINT', exitHandler);

async function exitHandler() {
    await connection.close();
    process.exit();
}