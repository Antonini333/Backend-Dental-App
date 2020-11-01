const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({

    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'canceled', 'expired']
    },
    date: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    hour: {
        type: String
    },
    symptoms: {
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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
