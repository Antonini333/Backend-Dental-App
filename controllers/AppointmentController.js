const Appointment = require('../models/Appointment');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const AppointmentController = {

    async newAppointment (req,res) {

        try{
          const appointment = await Appointment({
            patient_name: req.body.patient_name,
            date: req.body.date,
            symptoms: req.body.symptoms,
            patient_email: req.body.patient_email
          }).save();
          res.send({
            message: `Appointment succesfully created for the date ${appointment.date}`
          })
        }catch (error) {
          console.log(error)
          res.status(500).send({
            message: 'There was a problem trying to create an appointment.' + error
          })
        }
      
},

  async showAppointments (req,res) {
    try{
      const appointment = await Appointment.find({
        userId: req.user.id
      })
      res.send({appointment})
    } catch (error){
      console.error(error);
      res.status(500).send({
        message: 'There was a problem trying to show all the appointments.'
      })
    }
    },
    
    async cancelAppointment (req,res) { 
        try { 
        const appointment = await Appointment.findByIdAndDelete({ _id: req.params.id
        })
          res.send({message: `Appointment succesfully deleted.`})
        }catch(error){
          console.error(error);
            res.status(500).send({
              message: `There was a problem trying to cancel the appointment.`
            })
          }
        }



}
  

module.exports = AppointmentController