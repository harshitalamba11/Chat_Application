import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Initialize socket.io AFTER server is created
const io = new Server(server);

let socketsConnected = new Set();

io.on('connection', (socket) => {
    socketsConnected.add(socket.id);
    console.log(`New connection: ${socket.id}`);

    io.emit('clients-total', socketsConnected.size);

    socket.on('disconnect', () => {
        console.log(`Delete connection: ${socket.id}`);
        socketsConnected.delete(socket.id);
        io.emit('clients-total', socketsConnected.size);
    });

    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('chat-message', data);
    });

    // ✅ Add this block to handle typing feedback
    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data);
    });
});
