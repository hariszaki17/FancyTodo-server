const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
class UserController {
    static signup (req, res) {
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
            console.log(token)
            res.status(201).json({
                id: user.id,
                email: user.email,
                accessToken: token
            })
        }).catch((err) => {
            res.status(500).json(err)
        });
    }

    static signin(req, res) {
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
                    res.status(400).json({
                        type: 'Bad Request',
                        msg: 'Invalid Email/Password'
                    })
                }
            } else {
                res.status(400).json({
                    type: 'Bad Request',
                    msg: 'Invalid Email/Password'
                })
            }
        }).catch((err) => {
            res.status(500).json(err)
        });
    }

}

module.exports = UserController