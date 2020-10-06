const service = require('../services/user-service')

class UserController {
    static addUser = (req, res) => {
        try {
            const result = service.add(req.body)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    static deleteUser = (req, res) => {
        try {
            const result = service.del(req.params.id)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    static updateUser = (req, res) => {
        try {
            const result = service.update(req.body)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    static getUser = (req, res) => {
        try {
            const result = service.get(req.params.id)
            res.send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    static getAllUser = (req, res) => {
        try {
            const result = service.getAll()
            res.send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

}

module.exports = UserController;