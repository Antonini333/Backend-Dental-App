const mongoose = require('mongoose');


const AppointmentSchema = new mongoose.Schema({

    patient_name: {
        type: String,
        required: true
    },
    appointment_date: {
        type: String,
        required: true
    },
    treatment: String,

    user_token: {
        type: String,
        required: true
    },
    user_email: {
        type: String
    }

});

const Appointment= mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
