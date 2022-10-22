const Role = require('../models/role')

const Permission = require('../models/permission')

const database = require('../models')

const {Op} = require('sequelize')

module.exports = {
    

    async createRolePermission(req,res){

        const {permissions} = req.body
        const {roleId} = req.body

        try{
            const role = await database.Role.findOne({
                where: {
                    id: Number(roleId)
                }, 
                include: [
                    {association: 'permissions', attributes: ['name']}
                ]
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

            await role.addPermission(findPermissions)


            res.status(200).json(role)


        }catch(err){
            res.status(500).json({err: err.message})
        }
    },

    async removeRolePermission(req,res){

        const {permissions} = req.body
        const {roleId} = req.body

        try{
            const role = await database.Role.findOne({
                where: {
                    id: Number(roleId)
                }, 
                include: [
                    {association: 'permissions', attributes: ['name']}
                ]
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

            await role.removePermission(findPermissions)


            res.status(200).json(role)


        }catch(err){
            res.status(500).json({err: err.message})
        }
    }
}