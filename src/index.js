const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

const app = express()

const mongoUri = 'mongodb+srv://admin:passwordPassword@cluster0.mvzex.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
})
// when connected
mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance 🔥🔥")
})
// when error occur during connection
mongoose.connection.on('error', err => {
    console.log("Error connecting to mongo 😢😢: ", err)
})

app.get('/', (req, res) => {
    res.send("Hi there....")
})

app.listen(3000, () => console.log("Listening on Port 3000"))
