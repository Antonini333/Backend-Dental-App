const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AppointmentController');
const auth = require('../middleware/auth');


router.post('/create', AppointmentController.newAppointment); 
router.get('/show/:email_user', AppointmentController.showAppointments); 
router.delete('/cancel/:email_user', AppointmentController.cancelAppointment);





module.exports = router;