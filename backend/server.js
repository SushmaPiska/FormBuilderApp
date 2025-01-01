import path from 'path'
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";

dotenv.config({path:'./backend/.env'});

const app = express();
const PORT = process.env.PORT || 8000;

const __dirname=path.resolve()

app.use(express.json()); 
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.use(express.static(__dirname + '/public'));

app.use("/api/auth",userRouter);
// app.use("/api/auth",taskRouter);

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'frontend','dist','index.html'));
})
app.get('/assets/*.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});