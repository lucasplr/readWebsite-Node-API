const Author = require('../models/author')
const database = require('../models')
const author = require('../models/author')

module.exports = {

    async index(req,res){

        try{
            if(!req.isAuthenticated){

                const authors = await database.Author.findAll({
                    attributes: ['name']
                })

                res.status(200).json(authors)
            }else{
                const authors = await database.Author.findAll()
                res.status(200).json(authors)
            }    
        }catch(err){
            res.status(404).json({err:err.message})
        }
    },

    async create(req,res){
        const {name} = req.body

        try{
            const create = await database.Author.create({name})

            const find = await database.Author.findOne({
                where: {
                    name: name
                }
            })
            res.status(200).json(find)
        }catch(err){
            return res.status(500).json({err:err.message})
        }
    }, 

    async update(req,res){
        const {id} = req.params
        const {name} = req.body

        try{

            const updateAuthor = await database.Author.update({name: name}, {where: {
                id: Number(id)
            }})

            const findAuthor = await database.Author.findOne({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).json(findAuthor)
        }catch(err){
            return res.status(500).json({err: err.message})
        }
    },

    async delete(req,res){
        const {id} = req.params
        try{
            const deleteAuthor = await database.Author.destroy({
                where: {
                    id: Number(id)
                }
            })

            const findAuthor = await database.Author.findAll()
            res.status(200).json(findAuthor)
        }catch(err){
            res.status(500).json({err:err.message})
        }
    }
}