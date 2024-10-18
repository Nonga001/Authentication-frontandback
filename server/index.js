require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require('./routes/users');
const authRoutes = require("./routes/auth");


// Create Express app
const app = express();

// Database connection function
const connectToDatabase = () => {
    try {
        mongoose.connect(process.env.DB);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error(error);
        console.log("Could not connect to database!");
    }
};

// Connect to the database
connectToDatabase();

// Middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Define the port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));
