const { Task } = require('../models')

const authorization = (req, res, next) => {
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((result) => {
        if (result) {
            if (result.userId == req.currentUserId) {
                return next()
            } else {
                return next({
                    name: 'Unauthorized',
                    message: [{ message: 'User not authorized' }]
                })
            }
        } else {
            return next({
                name: 'NotFound',
                message: [{ message: 'User Not Found' }]
            })
        }
    }).catch((err) => {
        return next({
            name: 'InternalServerError',
            message: [{ message: err }]
        })
    });
}

module.exports = { authorization }