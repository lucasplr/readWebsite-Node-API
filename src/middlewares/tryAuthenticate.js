const userAuth = require('./userAuth')

module.exports = (req,res,next) => {
    req.isAuthenticated = false

    if(req.get('Authorization')){
        return userAuth(req,res,next)
    }
    
    next()
}