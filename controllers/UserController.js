const User = require('../models/User');
const bycrpt = require('bcryptjs')

const UserController = {

    async getAll(req,res) { //rol admin
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
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Something went wrong searching by Id'
        })
    }
    },

    async getByEmail(req,res) {
        try {
        const user = await User.findOne({ email: req.params.email});
        if (!user){
            res.status(204);
        }
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Something went wrong searching by e-mail'
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
    },

    async update(req,res) {
        try{
          const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
           res.send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Something went wrong updating user",
                error
            })

        }
    },

    async deleteById(req,res) {
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.send({
                message: "User successfully deleted", user})
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Something went wrong deleting user",
                error
            })
        }
    },

    async deleteByEmail(req,res) {
        try {
            const user = await User.findOneAndDelete({email: req.params.email})
            res.send({
                message: "User successfully deleted"
             })

        } catch (error){
            console.error(error);
            res.status(500).send({
                message: "Something went wrong deleting user",
                error
            })
        } 
    }

}


module.exports = UserController;