const { Task } = require('../models')
class TaskController {
    static readAll(req, res) {
        Task.findAll()
        .then((result) => {
            res.status(200).json({
                tasks: result,
                message: 'Data successfully loaded'
            })
        }).catch((err) => {
            res.status(500).json(err)
        });
    }

    static create(req, res) {
        const { title, description, status, due_date } = req.body
        Task.create({
            title,
            description,
            status,
            due_date
        })
        .then((result) => {
            res.status(201).json({
                tasks: result,
                message: 'Data successfully created'
            })
        }).catch((err) => {
            res.status(500).json(err)
        });
    }

    static delete(req, res) {
        const id = +req.params.id
        Task.findByPk(id)
        .then((result) => {
            let deletedData = result
            Task.destroy({
                where: {
                    id: id
                }
            })
            .then((result) => {
                res.status(200).json({
                    tasks: deletedData,
                    message: 'data successfully deleted'
                })
            }).catch((err) => {
                res.status(500).json(err)
            });
        }).catch((err) => {
            res.status(500).json(err)
        });
       
    }

    static readOne(req, res) {
        const id = +req.params.id
        Task.findByPk(id)
        .then((result) => {
            res.status(200).json({
                tasks: result,
                message: 'data successfully loaded'
            })
        }).catch((err) => {
            res.status(500).json(err)
        });
    }

    static update(req, res) {
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
           res.status(200).json({
            tasks: result,
            message: 'data successfully updated'
           })
        }).catch((err) => {
            res.status(500).json(err)
        });
    }
}

module.exports = TaskController