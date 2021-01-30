import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const { data } = await axios('http://localhost:5000/api/products')
      console.log(data)
      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      <h1>Latest Prodcuts</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
