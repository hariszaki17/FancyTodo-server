const { Task } = require('../models')
const { Op } = require('sequelize') 
class TaskController {
    static readAll(req, res, next) {
        let status
        if (req.query.status == 'Finished') {
            status = req.query.status
        } else {
            status = 'Unfinished'
        }
        Task.findAll({
            where: {
                [Op.and]: [
                    { userId: req.currentUserId },
                    { status: status }
                ]
            }
        })
        .then((result) => {
            return res.status(200).json({
                tasks: result,
                message: 'Data successfully loaded'
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static create(req, res, next) {
        const { title, description, status, due_date } = req.body
        Task.create({
            title,
            description,
            status,
            due_date,
            userId: req.currentUserId
        })
        .then((result) => {
            return res.status(201).json({
                tasks: result,
                message: 'Data successfully created'
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static delete(req, res, next) {
        const id = +req.params.id
        let deletedData
        Task.findByPk(id)
        .then((result) => {
            deletedData = result
            return Task.destroy({
                where: {
                    id: id
                }
            })
        })
        .then((result) => {
            return res.status(200).json({
                tasks: deletedData,
                message: 'data successfully deleted'
            })
        })
        .catch((err) => {
            return next(err)
        });
       
    }

    static readOne(req, res, next) {
        const id = +req.params.id
        Task.findByPk(id)
        .then((result) => {
            return res.status(200).json({
                tasks: result,
                message: 'data successfully loaded'
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static update(req, res, next) {
        const id = +req.params.id
        const { title, description, status, due_date } = req.body
        Task.update({
            title,
            description,
            status,
            due_date
        }, {
            where: {
                id: id
            }
        })
        .then((result) => {
            return Task.findByPk(id)
        })        
        .then((result) => {
           return res.status(200).json({
            tasks: result,
            message: 'data successfully updated'
           })
        }).catch((err) => {
            return next(err)
        });
    }
}

module.exports = TaskController