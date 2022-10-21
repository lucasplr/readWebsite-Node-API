const Author = require('../models/author')

const Book = require('../models/book')

const database = require('../models')

const {Op} = require('sequelize')

module.exports = {
    
    async createAuthorBook(req,res){
        const {authorId, bookId} = req.body
        console.log(bookId)

        try{
            const findAuthor = await database.Author.findOne({
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
            const findBooks = await database.Book.findAll({
                where: {
                    [Op.and]: [
                        {id: booksToAdd}
                    ]
                }
            })

            res.status(200).json({findAuthor, findBooks})
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }

}