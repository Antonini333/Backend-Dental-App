const mongoose = require('mongoose');
const moment = require('moment');
const UserSchema = new mongoose.Schema({
    patient_name: {
        type: String,
        required: true
    },
    appointment_date: {
        type: String,
        required: true
    },
    treatment: String,

    token_user: {
        type: String,
        required: true
    },
    email_user: {
        type: String
    }

})