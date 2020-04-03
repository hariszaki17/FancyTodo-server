const errorhandler = (err, req, res, next) => {
    console.log(err)
    if(err.name == 'BadRequest') {
        return res.status(400).json({
            errors: err.errors
        })
    } else if (err.name == 'InternalServerError') {
        return res.status(500).json({
            errors: err.errors
        })
    } else if (err.name == 'BadRequest') {
        res.status(400).json({
            errors: err.errors
        })
    } else if (err.name == 'NotFound') {
        res.status(404).json({
            errors: err.errors
        })
    } else if (err.name == 'Unauthorized') {
        res.status(401).json({
            errors: err.errors
        })
    } else if (err.name == 'SequelizeValidationError') {
        const errors = err.errors.map(el => ({
            message: el.message
        }))

        res.status(400).json({
            errors
        })
    } else if (err.name == 'JsonWebTokenError') {
        return res.status(401).json({
            errors: [{
                message: 'Please Login First'
            }]
        })
    } else {
        return res.status(500).json({
            errors: err.errors
        })
    }
}

module.exports = errorhandler