const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({

    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'canceled', 'expired'],
        required: [true, 'Campo obligatorio']
    },
    date: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    observations: {
        type: String
    },
    name_user: {
        type: String
    },
    token_user: {
        type: String,
        required: true
    },
    email_user: {
        type: String
    }

});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
