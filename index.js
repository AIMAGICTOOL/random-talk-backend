const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let waitingUser = null;

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  if (waitingUser) {
    // Pair the current socket with the waiting one
    const partner = waitingUser;
    waitingUser = null;

    socket.partner = partner;
    partner.partner = socket;

    socket.emit("message", "🟢 Connected to a stranger!");
    partner.emit("message", "🟢 Connected to a stranger!");
  } else {
    // No one is waiting, add to queue
    waitingUser = socket;
    socket.emit("message", "⏳ Waiting for a stranger to join...");
  }

  socket.on("send_message", (message) => {
    if (socket.partner) {
      socket.partner.emit("receive_message", message);
    }
  });

  socket.on("disconnect", () => {
    if (socket.partner) {
      socket.partner.emit("message", "❌ Stranger disconnected.");
      socket.partner.partner = null;
    } else if (waitingUser === socket) {
      waitingUser = null;
    }
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
