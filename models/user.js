const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    token: String,
    age: Number,
    DNI: String,
    address: String,
    phone: String,
    first_visit: Boolean
    
});





const User= mongoose.model('User', UserSchema);

module.exports = User;