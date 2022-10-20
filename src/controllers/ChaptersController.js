const Chapter = require('../models/chapter')
const database = require('../models')

module.exports = {

    async index(req,res){

        try{    
            const chapters = await database.Chapter.findAll()
            res.status(200).json(chapters)
        }catch(err){
            res.status(404).json({err:err.message})
        }
    },

    async create(req,res){
        const {name} = req.body

        try{
            const create = await database.Chapter.create({name})

            const find = await database.Chapter.findOne({
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

            const updateChapter = await database.Chapter.update({name: name},   {where: {
                id: Number(id)
            }})

            const findChapter = await database.Chapter.findOne({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).json(findChapter)
        }catch(err){
            return res.status(500).json({err: err.message})
        }
    },

    async delete(req,res){
        const {id} = req.params
        try{
            const deleteChapter = await database.Chapter.destroy({
                where: {
                    id: Number(id)
                }
            })

            const findChapter = await database.Chapter.findAll()
            res.status(200).json(findChapter)
        }catch(err){
            res.status(500).json({err:err.message})
        }
    }
}