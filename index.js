import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './db.js';
import { UserRouter } from './Router/user.js';
import { ShortRouter } from './Router/short.js';

//env part
dotenv.config()
const PORT = process.env.PORT

//middleware
const app = express()
app.use(express.json())

app.use(cors())

//dbconnection
dbConnection()
//routers
app.use("/api/user",UserRouter)
app.use("/api/short",ShortRouter)
//server connection
app.listen(PORT,()=>console.log(`localhost running under:${PORT}`))