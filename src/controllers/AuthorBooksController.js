const Author = require('../models/author')

const Book = require('../models/book')

const database = require('../models')

const {Op} = require('sequelize')

module.exports = {
    
    async createAuthorBook(req,res){
        const {authorId, bookId} = req.body
        console.log(bookId)

        try{
            const author = await database.Author.findOne({
                where: {
                    id: Number(authorId)
                },
                include: [
                    {association: 'authorbooks'}
                ]
            })

            const booksToAdd = []
            for(let i = 0; i < bookId.length; i++){
                await booksToAdd.push(bookId[i])
            }
            console.log(booksToAdd)
            const books = await database.Book.findAll({
                where: {
                    [Op.and]: [
                        {id: booksToAdd}
                    ]
                }
            })

            await author.addAuthorbooks(books)

            res.status(200).json(author)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }, 

    async removeAuthorBook(req,res){
        const {authorId, bookId} = req.body

        try{
            const author = await database.Author.findOne({
                where: {
                    id: Number(authorId)
                },
                include: [
                    {association: 'authorbooks'}
                ]
            })

            const booksToAdd = []
            for(let i = 0; i < bookId.length; i++){
                await booksToAdd.push(bookId[i])
            }
            console.log(booksToAdd)
            const books = await database.Book.findAll({
                where: {
                    [Op.and]: [
                        {id: booksToAdd}
                    ]
                }
            })

            await author.removeAuthorbooks(books)

            res.status(200).json(author)
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }

}