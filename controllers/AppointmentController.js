const Appointment = require('../models/Appointment');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const AppointmentController = {

    async newAppointment (req,res) {
      let user = await User.findOne({
        email: req.params.email
      });

     if(!user.token) {
        res.status(400).send({
          message: "Go register and login first"
        });
      }else{

        try{
          const appointment = await Appointment.create({
          
            date: req.body.date,
            name_user: user.name,
            symptoms: req.body.symptoms,
            email_user: user.email,
            token_user: user.token

          })
          res.send({
            message: `Appointment succesfully created for the date ${appointment.date}.`, appointment
          });
        }catch (error) {
          console.log(error)
          res.status(500).send({
            message: 'There was a problem trying to create an appointment.' + error
          })
       }
        }
      
},
/*
async appByEmail(req,res) {
  try {
  const appointment = await Appointment.findOne({ email_user: req.params.email_user});
  if (!appointment){
      res.status(204);
  }
  res.send(appointment);

} catch (error) {
  console.error(error);
  res.status(500).send({
      message: 'Something went wrong searching by e-mail'
  })
}
},*/

  async showAppointments (req,res) {
    try{
      const appointment = await Appointment.findOne({
        email_user: req.params.email_user,
        date: req.body.date
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
        const appointment = await Appointment.findOneAndDelete({
          email_user: req.params.email_user,
          date: req.body.date
        
          

        })
          res.send({message: `Appointment succesfully deleted.`, appointment})
        }catch(error){
          console.error(error);
            res.status(500).send({
              message: `There was a problem trying to cancel the appointment.`
            })
          }
        }



}
  

module.exports = AppointmentController