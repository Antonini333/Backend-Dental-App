const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const UserController = {

    async getAll(req,res) { // role admin {SEARCH}
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



    async register(req, res){  // user role {REGISTER, LOG IN, LOG OUT}
         try {
         const user = await User.create(req.body);
         res.send({ user, message: 'User successfully created'});
        } catch (error){
            console.error(error);
            res.status(500).send({message: 'User already exists', error})
        }
    },
    

    async login (req,res) {
        let userFound = await User.findOne({
            email: req.body.email
            
        });
        if(!userFound) {
            res.status(400).send({
                message: "Wrong credentials",
        
            })
        }else{
            const isMatch = await bcrypt.compare(req.body.password, userFound.password); console.log(isMatch, req.body.password, userFound)
            if(isMatch){

                const token = jwt.sign({id: userFound.id }, "mymotherpetsme", {expiresIn: '30d'})
                userFound.token = token;
                await userFound.replaceOne(userFound);

                res.send({
                    message: `Welcome back ${userFound.name}`,
                    name: userFound.name,
                    email: userFound.email,
                    token: userFound.token
            
                });
            }else{
                return res.status(400).send({
                    message: "Wrong credentials"
                })
            }
        }
    },

    async logout (req,res) {
        try {
            const email = { email: req.body.email 
            };
            const emptyToken = { token: ""
        };
        const user = await User.findOneAndUpdate(email, emptyToken)
            res.send(`Bye ${user.name}, see you next time!`)
         
          } catch (error) {
            console.log(error)
            res.status(500).send({message: 'There was a problem trying to log out.'})
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