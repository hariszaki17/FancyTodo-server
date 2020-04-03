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
                    errors: [{ message: 'Unauhtenticated access detected' }]
                })
            }
        } else {
            return next({
                name: 'NotFound',
                errors: [{ message: 'User Not Found' }]
            })
        }
    }).catch((err) => {
        return next({
            name: 'InternalServerError',
            errors: [{ message: err }]
        })
    });
}

module.exports = { authorization }