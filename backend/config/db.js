const mongoose = require("mongoose");

const connectDB = async (req, res, next) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`DB connected ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
