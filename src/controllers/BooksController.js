const Book = require('../models/book')
const database = require('../models')

module.exports = {

    async index(req,res){

        try{    
            const books = await database.Book.findAll({
                include: [
                    {association: 'bookchapters', attributes: ['name']},
                ]
            })
            res.status(200).json(books)
        }catch(err){
            res.status(404).json({err:err.message})
        }
    },

    async create(req,res){
        const {name, img} = req.body

        try{
            const create = await database.Book.create({name, imgCover: img})

            const find = await database.Book.findOne({
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
        const {name, img} = req.body

        try{

            const updateBook = await database.Book.update({name: name, imgCover: img},                 {where: {
                id: Number(id)
            }})

            const findBook = await database.Book.findOne({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).json(findBook)
        }catch(err){
            return res.status(500).json({err: err.message})
        }
    },

    async delete(req,res){
        const {id} = req.params
        try{
            const deleteBook = await database.Book.destroy({
                where: {
                    id: Number(id)
                }
            })

            const findBook = await database.Book.findAll()
            res.status(200).json(findBook)
        }catch(err){
            res.status(500).json({err:err.message})
        }
    }
}