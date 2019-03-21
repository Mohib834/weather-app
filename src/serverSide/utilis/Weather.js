const request = require('request');

const getGeocode = (location,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoid2Vic2l0ZTI4MTUiLCJhIjoiY2p0Nm8wc3FqMGh2dzQzbXN5OGlzZGZrZSJ9.EDJy9avsgI7_YWFL4Gz66A&limit=1`

    request({url:url,json:true}, (error,response,body) => {
        if(error){
            callback(error,undefined); //callback(error,result)
        }else if (body.features.length === 0){
            callback(`Wrong location input, search again`,undefined);
        }else {
            callback(undefined,{
                latitude:body.features[0].center[0],
                longitude:body.features[0].center[1],
                location:body.features[0].place_name
            });
        }
        
    })
}

//callback inside the http request is must to get the data asynchronously

const getWeather = (latitude,longitude,location,callback) => {
    const key = 'eb02821bfbfdb97bf9cf04ee0e2ea2a0';
    const url = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
    
    request({url:url,json:true}, (error,response,body) => {
        if(error) {
            callback('Error, Check your internet!',undefined) //callback(error,result)
        } else if(body.error){
            callback('Wrong input, try again',undefined);
        } else {
            callback(undefined,{
                icon:body.currently.icon,
                summary:body.currently.summary,
                temp:body.currently.temperature,
                humidity:body.currently.humidity,
                dewPoint:body.currently.dewPoint,
                uvIndex:body.currently.uvIndex,
                visibility:body.currently.visibility,
                location,
            })
        }
    })

}

module.exports = {
    geocode:getGeocode,
    weather:getWeather
}