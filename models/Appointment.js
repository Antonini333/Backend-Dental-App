const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({

    patient_name: {
        type: String
    },
    date: {
        type: Date
    },
    
    symptoms: {
        type: String
     },

    patient_token: {
        type: String
        
    },
   patient_email: {
        type: String
    }

});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
