const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AppointmentController');
const auth = require('../middleware/auth');


//router.get('/email/:email', AppointmentController.appByEmail);
router.post('/create/:email', auth, AppointmentController.newAppointment); // CHECKED
router.get('/show/:token_user', auth, AppointmentController.showAppointments); //Creo que funciona
router.delete('/cancel/:_id', auth, AppointmentController.cancelAppointment); // CHECKED





module.exports = router;