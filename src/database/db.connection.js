const mongoose = require('mongoose')
const { config } = require('dotenv')
config()

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('estamos conectados a la db')
  } catch (error) {
    console.log(error.message)
  }
}
dbConnection()
