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
        unique: true,
        validate: {
            validator: function(v) {
              return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(v);
            },
            message: props => `${props.value} Email not has a valid format`
          },
    },
    password:{
        type: String,
        required: true,
        validate: {
            validator: function(v) {
        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(v);
    },
    message: props => `${props.value} Password min length: 8. Must contain uppercase, lowcase, digits and special characters`
  },
    },
    role: {
        type: String,
        default: 'user',
        enum: ['admin', 'user']
    },
    token: {
        type: String 
   },
   

    age: Number,
    DNI: String,
    Nationality: String,
    address: String,
    phone: Number,
    first_visit: Boolean,
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'appointment'
    }]
    
    
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