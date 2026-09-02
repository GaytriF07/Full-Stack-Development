const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Simple route
app.get('/', (req, res) => {
  ; res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('A user connected id:', socket.id);

  socket.on('send', (msg) => {
    // brodcast the message to all connected clients
    io.emit('msg', msg);
  });
  socket.on('typing', (isTyping) => {
    // Broadcast typing status to all clients except the sender
    socket.broadcast.emit('typing', isTyping);
  });
 io.on('disconnect', () => {
    console.log('A user disconnected');
  })
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});