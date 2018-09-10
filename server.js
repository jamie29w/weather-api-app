const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const morgan = require("morgan");
require('dotenv').config()

app.use(morgan("dev"));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hi from server");
})

app.get('/coords/:loc', (req, res) => {
    axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.loc}&key=${process.env.GOOGLE_API_KEY}`)
        .then(response => {
            res.send(response.data)
        })
})

app.get('/weather/:lat,:lng', (req, res) => {
    axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${req.params.lat},${req.params.lng}?exclude=hourly,minutely,alerts,flags`)
    .then(response => {
        res.send(response.data)
    })
})

app.listen(5080, () => console.log('Kreacher is watching on port 5080.'));