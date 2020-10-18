const Appointment = require('../models/Appointment');
const User = require('../models/User');
const moment = require('moment');

const AppointmentController = {
  async newAppointment (req,res){
      let user = await User.findOne({
          email: req.body.email
        
      });

      if (!user.token) {
          res.status(400).send({
            message: "Login or register first, please"
          }); 
      } else {
          try {
            const appointment = await Appointment({
             //   appointment_date: moment().add(3, 'days').calendar(),
                patient_name: user.name,
                user_token: user.token,
                user_email: user.email
            }).save();
            res.status(201).send({
                message: "Appointment registered",
                appointment
            });
          } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'Something went wrong creating your appointment'
            });
          }
      }
  }


}





module.exports = AppointmentController;