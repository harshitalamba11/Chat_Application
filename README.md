
# 📦 Real-Time Chat App

A real-time chat application built with **Node.js**, **Express**, and **Socket.IO**, enabling instant messaging between multiple connected clients. It supports:
- Live message broadcasting
- Client count tracking
- Typing feedback notifications
- Message timestamping
- Notification sound on message receive

---

## 🖼️ Preview

> ![Screenshot](./public/screenshot.png) <!-- Optional: add a real screenshot path if available -->

---

## 🚀 Features

- 💬 Real-time chat with Socket.IO
- 🔔 Typing feedback indicator (e.g., "User is typing...")
- 📢 Message sound notification
- 🧑 Client count display
- 📅 Timestamps using Moment.js
- 🔁 Auto-scroll to latest messages

---

## 📁 Project Structure

```
.
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── tone.mp3
├── server.js
└── README.md
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app

# Install dependencies
npm install
```

---

## ▶️ Run the App

```bash
node server.js
```

Then open your browser at:
```
http://localhost:4000
```

---

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express)
- [socket.io](https://socket.io/)
- [moment.js](https://momentjs.com/) (via CDN on client-side)

---

## 📄 Example: Server Code (`server.js`)

```js
import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

const io = new Server(server);
let socketsConnected = new Set();

io.on('connection', (socket) => {
    socketsConnected.add(socket.id);
    io.emit('clients-total', socketsConnected.size);

    socket.on('disconnect', () => {
        socketsConnected.delete(socket.id);
        io.emit('clients-total', socketsConnected.size);
    });

    socket.on('message', (data) => {
        socket.broadcast.emit('chat-message', data);
    });

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data);
    });
});
```

---

## 👤 Author

**Your Name**  
Feel free to connect: [@yourusername](https://github.com/yourusername)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
