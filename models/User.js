const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    Nationality: String,
    address: String,
    phone: Number,
    first_visit: Boolean,
    
    
},{
    toJSON:{
        transform:function (doc,ret) {
            //delete ret.password
            delete ret.__v
            delete ret._id
            return ret;
        },
        virtuals: true
    }
});

UserSchema.virtual('contact').get(function (){
    const user = this;
    return{
        phone: user.phone,
        address: user.address
    }
})

UserSchema.pre('save', async function (next){
    try {

    const user = this;
    user.password = await bcrypt.hash(user.password, 9);
    next()
    } catch (error){
        console.error(error)
    }
})



const User= mongoose.model('User', UserSchema);

module.exports = User;