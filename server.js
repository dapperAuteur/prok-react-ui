const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 4001;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
  console.log("server 14 User connected");
  // console.log("socket", socket);

  socket.on("change state", state => {
    // console.log("server 18 Color Changed to: ", state);
    io.sockets.emit("update matches", state);
  });

  socket.on("disconnect", () => {
    console.log("server 23 user disconnected");
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
