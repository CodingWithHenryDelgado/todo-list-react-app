const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const PORT = 3030;
const mongoose = require('mongoose');
const cors = require("cors");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true }

app.use(express.json())
app.use(cors())

require('dotenv').config()

const env = process.env

mongoose.connect(env.MONGO_URI, connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.log(err))

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT)
})