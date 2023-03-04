import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import { connectDB } from './config/connectDB.js'
import { errorHandler, notFound } from './utils/errorHandler.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000
connectDB()

app.use(express.json())

app.use("/api/user",userRouter)

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})