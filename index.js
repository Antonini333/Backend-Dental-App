//Basic Import Section
const express = require('express');
const app = express();
const PORT = 3006;
const CORS = require('./middleware/CORS');

//DB Connection
const dbconnect = require('./config/dbconnect');
dbconnect();

//Routes
const usersRouter = require('./routes/users');
const appointmentsRouter = require('./routes/appointments')

//Middleware
app.use(express.json());
app.use(CORS);



//Endpoints
app.use('/users', usersRouter);
app.use('/appointments', appointmentsRouter);


//Port listen
app.listen(PORT, () => console.log('Server running on port ' + PORT))