const User = require('../models/user')

const database = require('../models')

module.exports = {

    async index(req,res){

        try{
            const users = await database.User.findAll()

            res.status(200).json(users)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async getUser(req,res){
        const {id} = req.params

        try{
            const findUser = await database.User.findOne({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).json(findUser)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async create(req,res){
        const {email, password} = req.body

        try{
            const create = await database.User.create({email, password})

            const user = await database.User.findOne({
                where: {
                    email: email
                }
            })

            res.status(200).json(user)
        }catch(err){
            res.status(500).json({err: err.message})
        }

    },

    async update(req,res){
        const {id} = req.params
        const {email, password} = req.body

        try{
            const update = await database.User.update({email, password}, {where: {
                id: Number(id)
            }})

            const postUpdate = await database.User.findOne({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).json(postUpdate)
        }catch(err){
            res.status(500).json({err: err.message})
        }

    },

    async delete(req,res){
        const {id} = req.params

        try{
            const deleteUser = await database.User.destroy({
                where: {
                    id: Number(id)
                }
            })

            const users = await database.User.findAll()

            res.status(200).json(users)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }
}