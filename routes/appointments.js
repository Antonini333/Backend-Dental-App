const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AppointmentController');
const auth = require('../middleware/auth');


router.post('/create', AppointmentController.newAppointment); //auth?
router.get('/show', AppointmentController.showAppointments); //problem
router.delete('/cancel/:id')





module.exports = router;