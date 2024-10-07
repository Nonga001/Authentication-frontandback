// require("dotenv").config();
// const express = require("express");
// const app = require();
// const cors = require("cors");
// const connection = require("./db");

// // database connection
// connection();

// // middlewares
// app.use(express.json());
// app.use(cors());

// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`Listening on port ${PORT}...`));







// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// // Create Express app
// const app = express();

// // Database connection function
// const connectToDatabase = () => {
//     const connectionParams = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     };
//     try {
//         mongoose.connect(process.env.DB, connectionParams);
//         console.log("Connected to database successfully");
//     } catch (error) {
//         console.error(error);
//         console.log("Could not connect to database!");
//     }
// };

// // Connect to the database
// connectToDatabase();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Define the port
// const port = process.env.PORT || 8080;

// // Start the server
// app.listen(port, () => console.log(`Listening on port ${port}...`));


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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

// Define the port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));
