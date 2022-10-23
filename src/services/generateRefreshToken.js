const jwt = require('jsonwebtoken')

const dayjs = require('dayjs')

const database = require('../models')

const userToken = require('../models/usertoken')

module.exports = {

    async generateRefreshToken(userId){

        const payload = {
            userId: userId
        }

        const refresh_token = await jwt.sign(payload, process.env.secret_refresh_token, {
            expiresIn: process.env.expires_in_refresh_token
        })

        const refresh_token_expires_date = dayjs().add(process.env.expires_in_refresh_token_days, 'days').toDate()

        try{

            await database.userToken.destroy({
                where: {
                    userId: userId
                }
            })
            
            const refreshToken = await database.userToken.create({
                userId: userId,
                refreshToken: refresh_token,
                expiresDate: refresh_token_expires_date
            })

            return refreshToken
        }catch(err){
            return err.message
        }
    }
}