const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config()
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();
const app = express();


// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/users',userRoutes);

// Starting server
const port = process.env.PORT || 7002
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})