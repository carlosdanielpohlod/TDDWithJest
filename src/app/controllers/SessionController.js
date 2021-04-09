const {users} = require('../models')

class SessionController {
    async store(req, res){
        const {email, password_hash} = req.body
        
        const user = await users.findOne({where: {email:email}})

        if(!user){
            return res.status(401).send({msg: 'User not found'})
        }

        if(!(await user.checkPassword(password_hash))){
            
            return res.status(401).json({message:'Incorrect password'})
        }
        return res.status(200).json({user, token: user.generateToken()})
    }
}

module.exports = new SessionController()