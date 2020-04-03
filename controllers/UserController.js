const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');


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

    static googleSign(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = ''
        client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID
        })
        .then((ticket) => {
            email = ticket.getPayload().email
            return User.findOne({
                where: {
                    email
                }
            })
        })
        .then(data => {
            console.log(data)
            if(data) {
                let payload = {
                    email: data.email,
                    id: data.id
                }
                let token = generateToken(payload)
                res.status(200).json({
                    id: data.id,
                    email: data.email,
                    accessToken: token
                })
            } else {
                console.log(email)
                return User.create({
                 email,
                 password: 'googlePass123'   
                })
            }
        })
        .then((result) => {
            console.log(email)
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
        })
        .catch((err) => {
            next(err)
        });
      }

}

module.exports = UserController