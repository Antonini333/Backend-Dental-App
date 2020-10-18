const router = require('express').Router();
const AppointmentController = require('../controllers/AppointmentController');



router.post(('/new'), AppointmentController.newAppointment);




module.exports = router;
