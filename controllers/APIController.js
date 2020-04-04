const axios = require('axios')

class APIController {

    static getTimePrayer (req, res, next) {
        let city
        return axios.get('https://api.ipify.org?format=json')
        .then(response => {
        return axios.get(`https://ipapi.co/${response.data.ip}/json`)
        })
        .then(response => {
            city = response.data.city
            city = city.toLowerCase()
            return axios.get(`http://muslimsalat.com/${city}.json?key=${process.env.PRAYER_TIME_KEY}`)
        })
        .then(response => {
            delete response.data.items[0].shurooq
            console.log(response.data.items[0])
            res.status(200).json({
                data: response.data.items[0],
                message: 'Successfully fetched'
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static getHoliday(req, res, next) {
        let year = req.params.year
        axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/ID`) 
        .then((result) => {
            let data = result.data
            return res.status(200).json({
                holidays: data
            })
        }).catch((err) => {
            return next(err)
        });
    }

}

module.exports = { APIController }