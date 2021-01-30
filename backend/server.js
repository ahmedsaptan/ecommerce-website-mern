const express = require('express')
const morgan = require('morgan')
const products = require('./data/products')
const app = express()

app.use(morgan('tiny'))
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
  console.log('Listen in 5000')
})
