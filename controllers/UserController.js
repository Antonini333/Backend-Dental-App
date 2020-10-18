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
       let bodyInfo = req.body;
       // RegEx => check if the email has a valid format
       let regexEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
       // RegEx => Demands password to have this format [min. length: 6 characters, must contain uppercase, lowercase, digits, NO SPACES]
       let regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
       
       if(!regexEmail.test(bodyInfo.email)) {
           res.send({
               message: "Email not has a valid format"
           });
           return;
       }

       if(!regexPassword.test(bodyInfo.password)) {
           res.send({
               message: "Password must have min. 6 characters, including uppercase, lowercase and digits"
           });
           return;
       }
       else {

        try {
         const user = await User.create(req.body);
         res.send({ user, message: 'User successfully created'});
        } catch (error){
            console.error(error);
            res.status(500).send({message: 'Something went wrong creating user'})
        }
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