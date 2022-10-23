//userToken model
//database
//jwt to decode refreshToken and take the userId
//if the token is expired will generate a new token
const userToken = require('../models/usertoken')

const database = require('../models')

const generateToken = require('../services/generateToken')

module.exports = {

    async getRefreshToken(req,res){

        const {refresh_token} = req.body

        try{
            const findRefreshToken = await database.userToken.findOne({
                where: {
                    refreshToken: refresh_token
                }
            })

            const user = await database.User.findOne({
                where: {
                    id: findRefreshToken.userId
                }
            })

            const token = await generateToken.generateToken(user)
    
            res.status(200).json({token: token}) 
    
        }catch(err){
            res.status(500).json({err:err.message})
        }
        

    }
}