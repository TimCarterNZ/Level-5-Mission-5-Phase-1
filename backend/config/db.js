const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/auction_data");
    console.log("Connected to MongoDB");
}

module.exports = connectDB;
