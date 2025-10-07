import express from "express";
import productRouter from './routes/product.route.js'
// import connectDB from "./config/db.js";
import db from "./config/db.js";
import http from "http"
import { Server } from "socket.io";
import setUpSocket from "./socket.js";

const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors:'*'
})

const port = 8000; // Or any port you prefer

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS Exam!');
});

app.use('/api/products',productRouter)

await db.authenticate()
await db.sync()


setUpSocket(io)

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); 

// connectDB().then(()=>{
  
//   app.listen(port, () => {
//       console.log(`Server listening at http://localhost:${port}`);
//   }); 

// })

