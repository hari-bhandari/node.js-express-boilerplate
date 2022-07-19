import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
import helmet from 'helmet'
import cors from 'cors'
import connectDB from './config/db.js'
import {errorHandler} from './middlewares/error.js'
import auth from './routes/auth.js'
// initializing express
const app = express()
// allowing json data to be sent in the request
app.use(express.json())
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 5000
//connecting to the database
connectDB()

//implementing helmet to secure the app from security vulnerabilities
app.use(helmet())
//error handling middleware
app.use(errorHandler)
// using cors to allow cross origin resource sharing
app.use(cors())
//routes
app.use('/api/auth', auth)
//error


app.get('/', (req, res) => {
    res.send('API is running....')
})


//starting the server
const server = app.listen(PORT, () => console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`error:${err.message}`)
    server.close(() => process.exit(1))
});
