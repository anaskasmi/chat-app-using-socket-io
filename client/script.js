import { io } from "socket.io-client";
const joinRoomButton = document.getElementById("room-button");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form");
const socket = io("http://localhost:3000");
socket.on('connect', () => {
    displayMessage(`You are connected with id : ${socket.id}`);
    socket.on('recieve-message', (data) => {
        displayMessage(data.name + ":" + data.message);
    });
})

form.addEventListener("submit", e => {
    e.preventDefault();
    const message = messageInput.value;
    const room = roomInput.value;
    console.log(messageInput);
    if (message === "") return;

    displayMessage(message);
    socket.emit('send-message', {
        id: '1235',
        'name': "Anas KASMI",
        "message": message,
        "time": Date.now(),
        "room": room
    });
    messageInput.value = "";
});

joinRoomButton.addEventListener("click", () => {
    const room = roomInput.value;
})

function displayMessage(message) {
    const div = document.createElement("div");
    div.textContent = message;
    document.getElementById("message-container").append(div);
}