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
    },
    role: {
        type: String,
        default: 'user',
        enum: ['admin', 'user']
    },
    token: String,
    age: Number,
    DNI: String,
    address: String,
    phone: Number,
    first_visit: Boolean
    
},{
    toJSON:{
        transform:function (doc,ret) {
            delete ret.password
            delete ret.__v
            return ret;

        }
    }
});





const User= mongoose.model('User', UserSchema);

module.exports = User;