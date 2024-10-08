import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes
import eventRouter from './routes/event.routes.js';
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/users", userRouter)
app.use("/api/events", eventRouter)

export { app };

