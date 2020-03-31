const axios = require('axios')

class APIController {
    static getHoliday(req, res, next) {
        let country = req.params.country
        axios.get(`https://holidayapi.com/v1/holidays?pretty&key=${process.env.APIKEY_HOLIDAYS}&country=${country}&year=2019`) //Tahunnya gak bisa diganti gara" apinya harus bayar
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