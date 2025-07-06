<h1 align="center">🚀 Real-Time Chat App</h1>
<p align="center">
  <b><i>Instant Messaging, Live Notifications, and More!</i></b><br>
  <img src="https://img.shields.io/badge/Node.js-Chat%20App-brightgreen?style=flat-square" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Socket.IO-Real%20Time-blue?style=flat-square" alt="Socket.IO"/>
  <img src="https://img.shields.io/badge/Express-Server-lightgrey?style=flat-square" alt="Express"/>
  <img src="https://img.shields.io/github/license/harshitalamba11/Chat_Application?style=flat-square" alt="License"/>
</p>

---

<p align="center">
  <!-- Add a screenshot of your app below -->
  <!-- <img src="path/to/screenshot.png" alt="App Screenshot" width="500"/> -->
</p>

---

## ✨ Features

- 💬 Real-time messaging powered by **Socket.IO**
- 👀 "User is typing…" feedback
- 🔔 Sound notifications for new messages
- 👥 Live online users count
- 🕒 Timestamps on messages (Moment.js)
- 🔄 Auto-scroll to latest message

---

## 🗂️ Project Structure

```
📦 Chat_Application
├── 📂 public         # Static frontend files (HTML, CSS, JS)
│   ├── 📂 css
│   ├── 📂 js
│   └── 📝 index.html
├── 📝 server.js      # Main server logic
├── 📝 package.json   # Project dependencies
└── 📝 README.md
```

---

## 🚦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harshitalamba11/Chat_Application.git
cd Chat_Application
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

Open your browser at [http://localhost:3000](http://localhost:3000) and start chatting!

---

## ⚙️ Configuration

- Change the server port in `server.js` with:
  ```js
  const PORT = process.env.PORT || 3000;
  ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Check the [issues page](https://github.com/harshitalamba11/Chat_Application/issues) or submit a pull request.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 🙏 Acknowledgments

- Built with ❤️ using [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), and [Socket.IO](https://socket.io/).
- UI inspired by modern messaging apps.
