const {Todo} = require("../models")

class TodoController {

    static findAll = async (req, res, next) => {
    
    try { 
        const data = await Todo.findAll();
        res.status(200).json(data);
    } 
        catch(err) {
        next(err)
    }
    
}
    static findOne = async (req, res, next) => {
         const {id} = req.params;
        try {
            const data = await Todo.findOne({
                where: {
                    id
                }
            })

            if(data) {
                res.status(200).json(data)
            } else {
                throw {name: "ErrorNotFound"}
            }
        } catch(err) {
            next(err);
        }
}
    static create = async (req, res, next) => {
        try {
            const {name, status} = req.body;
            
            const data = await Todo.create ({
               name,
               status 
            })

            res.status(200).json(data);
        } catch(err) {
            next(err);
        }
    }

    static destroy = async (req, res, next) => {
        try {
            const {id} = req.params;

            const data = await Todo.update({
                status: "inactive"
            }, {
                where: {
                    id
                }
            })

        } catch(err) {
            next(err)
        }
    }
}

module.exports = TodoController;