const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
class UserController {
    static signup (req, res, next) {
        const payload = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(payload)
        .then((result) => {
            const user = {
                id: result.id,
                email: result.email
            }
            const token = generateToken(user)
            res.status(201).json({
                id: user.id,
                email: user.email,
                accessToken: token
            })
        }).catch((err) => {
            return next({
                name: 'InternalServerError',
                errors: [{ message: err }]
            })
        });
    }

    static signin(req, res, next) {
        const payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((result) => {
            if(result) {
                const compare = decryptPassword(payload.password, result.password)
                if (compare) {
                    const user = {
                        id: result.id,
                        email: result.email,
                    }
                    const token = generateToken(user)
                    res.status(200).json({
                        id: user.id,
                        email: user.email,
                        accessToken: token
                    })
                } else {
                    return next({
                        name: 'BadRequest',
                        errors: [{ message: 'Invalid Email/Password' }]
                    })
                }
            } else {
                return next({
                    name: 'BadRequest',
                    errors: [{ message: 'Invalid Email/Password' }]
                })
            }
        }).catch((err) => {
            return next({
                name: 'InternalServerError',
                errors: [{ message: err }]
            })
        });
    }

}

module.exports = UserController