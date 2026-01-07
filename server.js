const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve frontend files from "public" folder
app.use(express.static('public'));

// Store users: { socketId: { username, publicKey } }
let users = {};

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // 1. User joins -> Save Public Key -> Broadcast to others
    socket.on('join', (data) => {
        const { username, publicKey } = data;
        users[socket.id] = { username, publicKey };
        
        io.emit('user_joined', { id: socket.id, username, publicKey });
        socket.emit('existing_users', users);
    });

    // 2. Relay Encrypted Message
    socket.on('send_message', (data) => {
        const { targetId, encryptedMessage } = data;
        io.to(targetId).emit('receive_message', {
            senderId: socket.id,
            encryptedMessage
        });
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
        io.emit('user_left', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});