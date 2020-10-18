const Appointment = require('../models/Appointment');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const AppointmentController = {

    async newAppointment (req,res) {
        try{
            const appointment = await Appointment.create(req.body);
            res.send({
                appointment, message: "Appointment created"
            })
        } catch (error){
            console.error(error);
            res.status(500).send({
                message: "Something went wrong creating appointment" });
        }
    }
}

  

module.exports = AppointmentController