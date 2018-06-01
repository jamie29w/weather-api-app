const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const morgan = require("morgan");
const apiKeys = require('./config.js');
const googleApiKey = apiKeys.googleApiKey;
const darkSkyApiKey = apiKeys.darkSkyApiKey;

app.use(morgan("dev"));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hi from server");
})

app.get('/coords/:loc', (req, res) => {
    axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.loc}&key=${googleApiKey}`)
        .then(response => {
            res.send(response.data)
        })
})

app.get('/weather/:lat,:lng', (req, res) => {
    axios.get(`https://api.darksky.net/forecast/${darkSkyApiKey}/${req.params.lat},${req.params.lng}`)
    .then(response => {
        res.send(response.data)
    })
})

app.listen(5080, () => console.log('Kreacher is watching on port 5080.'));