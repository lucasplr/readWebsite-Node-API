const User = require('../models/user')

const Role = require('../models/role')

const Permission = require('../models/permission')

const database = require('../models')

const {Op} = require('sequelize')

module.exports = {
    

    async createUserAcessControl(req,res){

        const {roles, permissions} = req.body
        const {userId} = req.body

        try{
            const user = await database.User.findOne({
                where: {
                    id: Number(userId)
                }, 
                include: [
                    {association: 'roles', attributes: ['name']},
                    {association: 'permissions', attributes: ['name']}
                ]
            })

            const roleValues = []
            if(roles != undefined){
                for (let i = 0; i < roles.length; i++){
                    await roleValues.push(roles[i])
                }
            }

            const findRoles = await database.Role.findAll({
                where: {
                    [Op.and]: [
                        {id: roleValues}
                    ]
                }
            })

            const permissionValues = []
            if(permissions != undefined){
                for(let i = 0; i < permissions.length; i++){
                    await permissionValues.push(permissions[i])
                }
            }

            const findPermissions = await database.Permission.findAll({
                where: {
                    [Op.and]: [
                        {id: permissionValues}
                    ]
                }
            })

            await user.addRole(findRoles)
            await user.addPermission(findPermissions)

            res.status(200).json(user)


        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async removeUserAcessControl(req,res){
        
        const {roles, permissions} = req.body
        const {userId} = req.body

        try{
            const user = await database.User.findOne({
                where: {
                    id: Number(userId)
                }, 
                include: [
                    {association: 'roles', attributes: ['name']},
                    {association: 'permissions', attributes: ['name']}
                ]
            })

            const roleValues = []
            if(roles != undefined){
                for (let i = 0; i < roles.length; i++){
                    await roleValues.push(roles[i])
                }
            }

            const findRoles = await database.Role.findAll({
                where: {
                    [Op.and]: [
                        {id: roleValues}
                    ]
                }
            })

            const permissionValues = []
            if(permissions != undefined){
                for(let i = 0; i < permissions.length; i++){
                    await permissionValues.push(permissions[i])
                }
            }

            const findPermissions = await database.Permission.findAll({
                where: {
                    [Op.and]: [
                        {id: permissionValues}
                    ]
                }
            })

            await user.removeRole(findRoles)
            await user.removePermission(findPermissions)

            res.status(200).json(user)


        }catch(err){
            res.status(500).json({err: err.message})
        }
    }
}