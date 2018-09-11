const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const morgan = require("morgan")
const port = process.env.PORT || 5080
const path = require("path")
require('dotenv').config()


app.use(morgan("dev"));
app.use(cors());

// for debugging and deployment only
app.get('/api/hello', (req, res) => {
    res.send("Hi from server");
})

//actual query routes
app.get('/api/coords/:loc', (req, res) => {
    axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.loc}&key=${process.env.GOOGLE_API_KEY}`)
        .then(response => {
            res.send(response.data)
        })
})

app.get('/api/weather/:lat,:lng', (req, res) => {
    axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${req.params.lat},${req.params.lng}?exclude=hourly,minutely,alerts,flags`)
    .then(response => {
        res.send(response.data)
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => console.log(`Kreacher is watching on ${port}.`));