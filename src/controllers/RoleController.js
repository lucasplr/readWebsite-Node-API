const Role = require('../models/role')

const database = require('../models')

module.exports = {

    async index(req,res){

        try{
            const roles = await database.Role.findAll()

            res.status(200).json(roles)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async getRole(req,res){
        const {id} = req.params

        try{
            const findRole = await database.Role.findOne({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).json(findRole)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async create(req,res){
        const {name, description} = req.body

        try{
            const create = await database.Role.create({name, description})

            const Role = await database.Role.findOne({
                where: {
                    name: name
                }
            })

            res.status(200).json(Role)
        }catch(err){
            res.status(500).json({err: err.message})
        }

    },

    async update(req,res){
        const {id} = req.params
        const {name, description} = req.body

        try{
            const update = await database.Role.update({name, description}, {where: {
                id: Number(id)
            }})

            const postUpdate = await database.Role.findOne({
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
            const deleteRole = await database.Role.destroy({
                where: {
                    id: Number(id)
                }
            })

            const Roles = await database.Role.findAll()

            res.status(200).json(Roles)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }
}