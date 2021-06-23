const io = require("socket.io")(3000, {
    cors: {
        origin: [
            "http://localhost:8080"
        ]
    }
});
io.on("connection", socket => {
    // console.log(socket.id);
    socket.on('send-message', (obj) => {
        // console.log(obj);
        if (obj.room) {
            socket.to(obj.room).emit("recieve-message", obj);
        } else {
            socket.broadcast.emit("recieve-message", obj);
        }
    })
})