import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import prductRouter from './routes/productRouter.js'
dotenv.config()

const app = express()
connectDB()
app.use(morgan('tiny'))
app.use(cors())

app.get('/', (req, res) => {
  return res.status(200).send('API work')
})

app.use('/api/products', prductRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Listen running in ${process.env.NODE_ENV} ${process.env.PORT || 5000}`
      .yellow.bold
  )
})
