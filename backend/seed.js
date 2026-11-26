#!/usr/bin/env node
const { program } = require("commander");
const mongoose = require("mongoose");
const auctionData = require("./data/auctions.json");
const connectDB = require("./config/db");
const Auction = require("./models/Auction");

async function withDB(operation) {
    try {
        await connectDB();
        await operation();
    } catch (error) {
        console.error("Operation failed:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

program
    .command("seed")
    .description("Insert sample auction data")
    .action(async () => {
        await withDB(async () => {
            console.log("Seeding auction data...");

            let inserted = 0;
            let skipped = 0;

            for (const item of auctionData) {
                const result = await Auction.updateOne(
                    { auction_id: item.auction_id },
                    { $setOnInsert: item },
                    { upsert: true },
                );

                if (result.upsertedCount > 0) {
                    inserted++;
                } else {
                    skipped++;
                }
            }

            console.log(`${inserted} auction documents inserted.`);
            console.log(`${skipped} existing auction documents skipped.`);
        });
    });

program
    .command("delete")
    .description("Delete auction data")
    .action(async () => {
        await withDB(async () => {
            const result = await Auction.deleteMany({});

            if (result.deletedCount === 0) {
                console.log("No auction data to delete.");
            } else {
                console.log(
                    `${result.deletedCount} auction documents deleted.`,
                );
            }
        });
    });

program.parseAsync(process.argv);
