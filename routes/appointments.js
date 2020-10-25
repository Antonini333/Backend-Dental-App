const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AppointmentController');
//const auth = require('../middleware/auth');


//router.get('/email/:email', AppointmentController.appByEmail);
router.post('/create/:email', AppointmentController.newAppointment); // CHECKED !!
router.get('/show/:email_user', AppointmentController.showAppointments); //Creo que funciona
router.delete('/cancel/:email_user', AppointmentController.cancelAppointment); // CHECKED





module.exports = router;