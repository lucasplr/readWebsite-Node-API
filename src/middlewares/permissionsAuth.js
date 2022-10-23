const database = require('../models')

module.exports = {

    can(requisition){
        return async (req,res,next) => {
            const id = req.userId

            try{

                const user = await database.User.findOne({
                    where: {
                        id: Number(id)
                    },
                    include: [
                        {association: 'permissions'}
                    ]
                })

                const names = await user.permissions.map(permissions => permissions.name).some(permission => requisition.includes(permission))

                if(names){
                    next()
                }else{
                    return res.status(404).json("User doesn't have permission!")
                }
            }catch(err){
                return res.status(500).json({err: err.message})
            }
        }
    },

    is(requisition){
        return async (req,res,next) => {
            const id = req.userId
    
            try{
                const user = await database.User.findOne({
                    where: {
                        id: Number(id)
                    },
                    include: [
                        {association: 'roles'}
                    ]
                })
                const roles = await user.roles.map(roles => roles.name).some(role => requisition.includes(role))
                
                if(roles){
                    next()
                }else{
                    return res.status(404).json("User doesn't have permission!")
                }
            }catch(err){
                return res.status(500).json({err: err.message})
            }
        }
    }
}