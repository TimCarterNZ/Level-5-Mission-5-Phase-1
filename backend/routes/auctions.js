const express = require("express");
const Auction = require("../models/Auction");

const router = express.Router();

router.get("/search", async (req, res) => {
    const searchTerm = req.query.q;

    if (typeof searchTerm !== "string" || !searchTerm.trim()) {
        return res.status(400).json({
            error: "A valid search term is required.",
        });
    }

    if (!/[a-zA-Z0-9]/.test(searchTerm)) {
        return res.status(400).json({
            error: "Search must contain at least one letter or number.",
        });
    }

    const escapedSearch = searchTerm
        .trim()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const searchPattern = {
        $regex: escapedSearch,
        $options: "i",
    };

    try {
        const results = await Auction.find({
            $or: [{ title: searchPattern }, { description: searchPattern }],
        });

        res.json(results);
    } catch (error) {
        console.error("Search failed:", error.message);

        res.status(500).json({
            error: "Unable to retrieve auction data.",
        });
    }
});

module.exports = router;
