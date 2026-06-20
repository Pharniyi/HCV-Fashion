import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import { connectDB } from './lib/db.js';
import dns from "node:dns/promises";
import cookieParser from 'cookie-parser';
import cors from 'cors'; //to enable Cross-Origin Resource Sharing (CORS) in the application, allowing it to handle requests from different origins (domains) and enabling communication between the frontend and backend when they are hosted on different domains or ports.
import {app, server} from "./lib/socket.js" //to import the app and server objects from the socket.js module, which are used to set up the Express application and the Socket.IO server for real-time communication in the application. The app object is used to define routes and middleware for handling HTTP requests, while the server object is used to listen for incoming connections and manage WebSocket communication with clients.
import path from 'path' //to import the built-in path module from Node.js, which provides utilities for working with file and directory paths. In this context, it is used to handle file paths for serving static files or managing file uploads in the application, ensuring that file paths are constructed correctly across different operating systems and environments.

dns.setServers(["8.8.8.8", "1.1.1.1"]); //to set the DNS servers for the application to use when resolving domain names. By specifying Google's public DNS server (8.8.8.8) and Cloudflare's public DNS server (1.1.1.1), the application can resolve domain names more reliably.

dotenv.config(); //to load environment variables from a .env file into process.env, allowing the application to access configuration settings such as database connection strings, API keys, and other sensitive information securely without hardcoding them in the source code. This is a common practice to manage configuration in Node.js applications and keep sensitive data out of the codebase.

     
const PORT = process.env.PORT //to define a constant named PORT that retrieves the value of the PORT environment variable. This allows the application to listen on a specific port defined in the environment configuration, making it flexible and adaptable to different deployment environments where the port number may vary. If the PORT environment variable is not set, it will be undefined, and the application may need to handle this case by providing a default port or throwing an error.
const _dirname = path.resolve() //to get the absolute path of the current directory where the script is located. This is useful for constructing file paths for serving static files, managing file uploads, or any other operations that require working with file system paths in a way that is compatible across different operating systems and environments. By using path.resolve(), we can ensure that we have a consistent and correct reference to the directory regardless of how the script is executed.
app.use(express.json()) // Middleware to parse JSON request bodies, to extract the json data from the body 
app.use(cookieParser()); // Middleware to parse cookies from incoming requests, to extract the cookies from the request headers and make them available in the req.cookies object for further processing in the application.
app.use(cors({ //to configure CORS settings for the application, allowing it to handle cross-origin requests from the specified origin and enabling credentials to be included in those requests.
  origin: "http://localhost:5173", //to specify the allowed origin for cross-origin requests, allowing only requests from http://localhost:5173 to access the resources of the backend server. This is important for security reasons to prevent unauthorized access from other origins.
  credentials: true, //to allow cookies and other credentials to be included in cross-origin requests, enabling the frontend application to send authentication tokens or session cookies along with requests to the backend server, which is necessary for maintaining user sessions and authentication state across different origins.
}))

app.use("/api/auth", authRoutes) //to mount the authRoutes router on the /api/auth path, meaning that any requests to endpoints starting with /api/auth will be handled by the routes defined in the authRoutes module. This allows for better organization of routes related to authentication and keeps the main application file cleaner by delegating route handling to separate modules.

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist"))) //to serve static files from the frontend/dist directory when the application is running in production mode. This allows the backend server to serve the built frontend assets (e.g., HTML, CSS, JavaScript) directly to clients when they access the application, enabling a seamless deployment of both the frontend and backend together in a production environment.
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html")) //to handle any GET requests that do not match existing API routes by sending the index.html file from the frontend/dist directory. This is important for single-page applications (SPAs) where the frontend routing is handled client-side, allowing the application to serve the main HTML file for any route and let the frontend JavaScript handle the routing logic.
  });
}

server.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
  connectDB();
});