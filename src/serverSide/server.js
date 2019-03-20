const path = require('path');
const express = require('express');
const app = express();

const distPath = path.join(__dirname,'../../dist')

app.use(express.static(distPath));

const getWeather = require('./utilis/Weather.js');
 
//Making Api endpoint
app.get('/weather', (req,res) => {
    const search = req.query.search;
    if(search){
        return getWeather.geocode(search, (error, {latitude,longitude,location} = {}) => {
            if(error) return res.send({ error })

            getWeather.weather(latitude,longitude, (error, result) => {
                if(error) return res.send({ error })
                res.send(result);
            });
        });
    }
    res.send({
        Error:'Provide a search term, Please!'
    })
})

app.listen(3000, () => console.log('Server Initialised'));