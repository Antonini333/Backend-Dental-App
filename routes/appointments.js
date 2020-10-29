const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AppointmentController');
//const auth = require('../middleware/auth');


//router.get('/email/:email', AppointmentController.appByEmail);
router.post('/create/:token', AppointmentController.newAppointment); // CHECKED !!
router.post('/show/:email_user', AppointmentController.showAppointments); //Creo que funciona
router.delete('/cancel/:email_user', AppointmentController.cancelAppointment); // CHECKED





module.exports = router;