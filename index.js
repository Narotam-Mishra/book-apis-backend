
const express = require('express');
require('dotenv').config();
const server = express();

// database connection
const connectDB = require('./db/DBConnection');

// routers
const bookRoute = require('./routes/bookStoreRoutes');

// middleaware setup and error handling

const notFoundMiddleware = require('./middleware/not-found');

// middleware setup to access JSON data
server.use(express.json())

server.get('/' , (req, res) => {
    res.send("RESTful API for managing a simple book database.");
})

server.use('/api/v1/book', bookRoute);

server.use(notFoundMiddleware);

const portNo = process.env.PORT || 7474;
const mongo_URI = process.env.mongoURL;

const startServer = async () => {
    try {
        await connectDB(mongo_URI)
        .then(() => console.log('DB Connected'))
        server.listen(portNo, () => {
            console.log(`Server is listening on port ${portNo}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();