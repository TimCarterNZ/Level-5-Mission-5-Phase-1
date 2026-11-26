# Mission 5 – Trade Me Redesign Project

## Table of Contents

- About the Project
- Built With
- Getting Started
- Usage
- API Documentation
- Project Structure
- Features
- Roadmap
- Acknowledgements

## About the Project

This project is part of the Mission Ready Level 5 Full Stack Development programme.

The project involves redesigning aspects of the Trade Me marketplace in collaboration with a UX design team, with the objective of improving the user experience.

Phase 1 focuses on establishing the backend infrastructure, implementing a MongoDB database, developing a command-line interface for managing sample auction data, and creating a RESTful API for retrieving relevant auction listings.

## Built With

- Node.js
- Express.js
- MongoDB
- Mongoose
- Commander.js
- MongoDB Compass
- Git and GitHub

## Getting Started

### Prerequisites

Ensure the following software is installed:

- Node.js
- npm
- MongoDB Community Server
- MongoDB Compass (optional, for database management)
- Git

### Installation

1. Clone the project repository.
2. Navigate to the backend directory:

   `cd backend`

3. Install the required dependencies:

   `npm install`

4. Ensure your local MongoDB service is running.

The application connects to the following local MongoDB database:

`mongodb://127.0.0.1:27017/auction_data`

## Usage

### Seed the Database

To populate the database with sample auction documents, run:

`node seed.js seed`

The seed command inserts new auction documents while skipping existing documents with matching auction IDs.

Example output:

```
Connected to MongoDB
Seeding auction data...
13 auction documents inserted.
0 existing auction documents skipped.
```

The seeding operation is idempotent, meaning it can be executed repeatedly without creating duplicate documents.

### Delete Auction Data

To remove all auction documents from the database, run:

`node
