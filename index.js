//Basic Import Section
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const auth = require('./middleware/auth');
const cors = require('./middleware/cors');
const mongoose = require('mongoose');
const dbconnect = require('./config/dbconnect.js');

//DB Connection
//const dbconnect = require('./config/dbconnect');
//dbconnect();

//Routes
const usersRouter = require('./routes/users');
const appointmentsRouter = require('./routes/appointments')

//Middleware
app.use(express.json());
app.use(cors);
//app.use(auth); LOL



//Endpoints
app.use('/users', usersRouter);
app.use('/appointments', appointmentsRouter);


//Port listen
app.listen(PORT, () => console.log('Server running on port ' + PORT))