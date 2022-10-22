const jwt = require('jsonwebtoken')


module.exports = {
    
    async generateToken(user){
        const payload = {
            id: user.id
        }

        const token = await jwt.sign(payload, process.env.secret_token, {expiresIn: process.env.expires_in_token})

        //console.log(process.env.secret_token, process.env.expires_in_token)


        return token
    }
}