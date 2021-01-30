import mongoose from 'mongoose'
import dotenv from 'dotenv'

import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'

import Product from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany({})
    await User.deleteMany({})
    await Product.deleteMany({})

    const addedUsers = await User.insertMany(users)
    const adminUser = addedUsers[0]._id

    const smapleProducts = products.map((prod) => {
      return {
        ...prod,
        user: adminUser,
      }
    })

    await Product.insertMany(smapleProducts)
    console.log('Data imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    console.log('Data destroyed'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
  }
}

if (process.argv[2] === 'd') {
  destroyData()
} else {
  importData()
}
