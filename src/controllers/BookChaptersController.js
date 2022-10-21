const Chapter = require('../models/chapter')

const Book = require('../models/book')

const database = require('../models')

const {Op} = require('sequelize')

module.exports = {
    
    async createBookChapter(req,res){
        const {chapterId, bookId} = req.body
        console.log(bookId)

        try{
            const book = await database.Book.findOne({
                where: {
                    id: Number(bookId)
                },
                include: [
                    {association: 'bookchapters'}
                ]
            })

            const chaptersToAdd = []
            for(let i = 0; i < chapterId.length; i++){
                await chaptersToAdd.push(chapterId[i])
            }

            const chapters = await database.Chapter.findAll({
                where: {
                    [Op.and]: [
                        {id: chaptersToAdd}
                    ]
                }
            })

            await book.addBookchapters(chapters)

            res.status(200).json({book, chapters})
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }, 

    async removeBookChapter(req,res){
        const {chapterId, bookId} = req.body
        console.log(bookId)

        try{
            const book = await database.Book.findOne({
                where: {
                    id: Number(bookId)
                },
                include: [
                    {association: 'bookchapters'}
                ]
            })

            const chaptersToAdd = []
            for(let i = 0; i < chapterId.length; i++){
                await chaptersToAdd.push(chapterId[i])
            }

            const chapters = await database.Chapter.findAll({
                where: {
                    [Op.and]: [
                        {id: chaptersToAdd}
                    ]
                }
            })

            await book.removeBookchapters(chapters)

            res.status(200).json({book, chapters})
        }catch(err){
            res.status(500).json({err: err.message})
        }
    }

}