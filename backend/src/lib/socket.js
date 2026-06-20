import {Server} from "socket.io" //to import the Server class from the socket.io library, which is used to create a new Socket.IO server instance for handling real-time communication between the backend server and connected clients. The Server class provides methods and properties to manage WebSocket connections, emit events, and handle incoming messages from clients in a real-time manner.
import http from "http" //to import the built-in http module from Node.js, which is used to create an HTTP server that can handle incoming HTTP requests and responses. In this context, it is used to create a server instance that will be passed to the Socket.IO server for handling WebSocket connections alongside regular HTTP requests.
import express from "express" //to import the Express framework, which is a popular web application framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware support, and easy handling of HTTP requests and responses. In this context, it is used to create an Express application that will serve as the backend server for handling API routes and integrating with the Socket.IO server for real-time communication.

const app = express() //to create an instance of the Express application, which will be used to define routes, middleware, and start the server. The app variable represents the main application object that will handle incoming HTTP requests and send responses back to clients. It is also passed to the HTTP server to enable handling of both regular HTTP requests and WebSocket connections through Socket.IO.
const server = http.createServer(app) //to create an HTTP server instance using the http module, and pass the Express
const io = new Server(server, { //to create a new Socket.IO server instance and attach it to the HTTP server. This allows the Socket.IO server to handle WebSocket connections alongside regular HTTP requests. The second argument is an options object where we can configure CORS settings for the Socket.IO server, allowing it to accept connections from specified origins.
    cors: {
        origin: ["http://localhost:5173"], //to specify the allowed origin for cross-origin requests to the Socket.IO server, allowing only requests from http://localhost:5173 to establish WebSocket connections. This is important for security reasons to prevent unauthorized access from other origins.
    }
})

export function getReceiverSocketId(userId) {
    return userSocketMap[userId]; //to retrieve the socket ID associated with a given user ID from the userSocketMap object. This function can be used to get the socket ID of a specific user, which can then be used to emit events or send messages to that user through the Socket.IO server.
}

//used to store online users
const userSocketMap = {}; //{userId: socketId} userId is the key from db and socketId is the value

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.auth?.userId || socket.handshake.query?.userId; // support auth payload and legacy query fallback
    if (userId) userSocketMap[userId] = socket.id;

    io.emit("online-users", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id, { userId });
        if (userId) delete userSocketMap[userId];
        io.emit("online-users", Object.keys(userSocketMap));
    });
});

export {io, app, server}