const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'https://api.darksky.net/forecast/e8b69faa13c1a1f9907eee202e4dc961/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    // const url = 'https://api.darksky.net/forecast/e8b69faa13c1a1f9907eee202e4dc961/' + latitude + ',' + longitude


    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find locaiton. Please try again!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast