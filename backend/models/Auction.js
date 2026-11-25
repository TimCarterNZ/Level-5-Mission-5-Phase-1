const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    auction_id: { type: Number, required: true, unique: true },
    title: String,
    description: String,
    start_price: Number,
    reserve_price: Number,
});

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = Auction;
