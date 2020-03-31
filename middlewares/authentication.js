const { verify } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = (req, res, next) => {
    try {
        const decoded = verify(req.headers.access_token)
        User.findOne({
            where: {
                id: decoded.id
            }
        })
        .then((result) => {
            if(result) {
                req.currentUserId = result.id
                return next();
            } else {
                return next({
                    name: 'Unauthorized',
                    errors: [{ message: 'Unauhtenticated access detected' }]
                })
            }
        }).catch((err) => {
            return next({
                name: 'NotFound',
                errors: [{ message: 'User Not Found' }]
            })
        });
    } catch (err) {
        return next({
            name: 'InternalServerError',
            errors: [{ message: err }]
        })
    }
}

module.exports = { authentication }