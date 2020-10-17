const { registerDecorator } = require('handlebars');
const User = require('../models/User')
const UserController = {

    async getAll(req,res) {
        try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Something went wrong collecting users'
        })
    }
},
    async getById(req,res) {
        try {
        const users = await User.findById(req.params.id);
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Something went wrong collecting users'
        })
    }
    },
    async register(req, res){
        try{
         const user = await User.create(req.body);
         res.send({ user, message: 'User successfully created'});
        } catch (error){
            console.error(error);
            res.status(500).send({message: 'Something went wrong creating user'})
        }
    }

}


module.exports = UserController;