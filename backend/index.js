const express = require("express");
const connectDB = require("./config/db");
const auctionRoutes = require("./routes/auctions");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/auctions", auctionRoutes);

app.get("/", (req, res) => {
    res.send("Auction API is running");
});

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();
