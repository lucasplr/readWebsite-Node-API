const jwt = require('jsonwebtoken')

module.exports = async function(req,res,next){

    const authToken = req.headers['authorization']

    

    if(authToken != undefined){

        const bearer = authToken.split(' ')

        const token = bearer[1]

        try{
            const verify = await jwt.verify(token, process.env.secret_token)

            next()
        }catch(err){
            return res.status(500).json({err: err.message})
        }
        //const decode = await jwt.decode(token)
    }else{
        return res.status(401).json('Invalid Token!')
    }

}