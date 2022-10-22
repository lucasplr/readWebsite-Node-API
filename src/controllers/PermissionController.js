const Permission = require('../models/user')

const database = require('../models')

module.exports = {

    async index(req,res){

        try{
            const permissions = await database.Permission.findAll()

            res.status(200).json(permissions)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async getPermission(req,res){
        const {id} = req.params

        try{
            const findPermission = await database.Permission.findOne({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).json(findPermission)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async create(req,res){
        const {name, description} = req.body

        try{
            const create = await database.Permission.create({name, description})

            const Permission = await database.Permission.findOne({
                where: {
                    name: name
                }
            })

            res.status(200).json(Permission)
        }catch(err){
            res.status(500).json({err: err.message})
        }

    },

    async update(req,res){
        const {id} = req.params
        const {name, description} = req.body

        try{
            const update = await database.Permission.update({name, description}, {where: {
                id: Number(id)
            }})

            const postUpdate = await database.Permission.findOne({
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
            const deletePermission = await database.Permission.destroy({
                where: {
                    id: Number(id)
                }
            })

            const Permissions = await database.Permission.findAll()

            res.status(200).json(Permissions)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }
}