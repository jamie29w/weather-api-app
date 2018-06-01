const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


app.use(cors());

console.log(cors);

app.get('/', (req, res) => {
    res.send("Hi from server");
})

app.get('/coords/:loc', (req, res) => {
    // const weather = 'stormy'
    axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.loc}&key=AIzaSyCZNng4wnr3pcGCRRotJxDGMDVxYLqh9I8`)
        .then(response => {
            res.send(response.data)
        })
})

app.get('/weather/:')

app.listen(5080, () => console.log('Kreacher is watching on port 5080.'));