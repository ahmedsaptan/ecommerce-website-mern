import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DEV_MONGO_URL, {
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB CONNECTED ${conn.connection.host}`.cyan.underline)
  } catch (e) {
    console.log(e.message.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
