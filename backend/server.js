import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.get('/', (req, res) => {
  return res.status(200).send('API work')
})

app.get('/api/products', (req, res) => {
  return res.status(200).json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Listen running in ${process.env.NODE_ENV} ${process.env.PORT || 5000}`
  )
})
