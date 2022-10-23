const database = require('../models')

const userToken = require('../models/usertoken')

const generateRefreshToken = require('./generateRefreshToken')

const generateToken = require('./generateToken')

const jwt = require('jsonwebtoken')

const dayjs = require('dayjs')

module.exports = {

    async checkUser(user){

        const token = await generateToken.generateToken(user)

        const findRefresh = await database.userToken.findOne({
            where: {
                id: user.id
            }
        })

        if(!findRefresh){
            const refreshToken = await generateRefreshToken.generateRefreshToken(user.id)

            return {status: 200, token: token, refresh_token: refreshToken}
        }else{

            const checkExpired = await dayjs().isAfter(findRefresh.expiresDate)
            
            if(checkExpired){
                await database.userToken.destroy({
                    where: {
                        id: user.id
                    }
                })

                const refreshToken = await generateRefreshToken.generateRefreshToken(user.id)

                return {status: 200, token: token, refresh_token: refreshToken}
            }else{
                const refresh_token = findRefresh

                return {status: 200, token: token, refresh_token: refresh_token.refreshToken}
            }
        }
    }
}