 # DentalClinicAppointments 

## What is DentalClinicAppointments?

AppDentalClinic is (for now) the backend application for users of a dental clinic where they can manage his appointments



Technologies:

- Javascript.
- NodeJS.
- Express.
- MongoDB.
- Mongoose.
- Mongo Atlas.
- Postman.
- Git.
- GitHub.
- Heroku.

Dependencies:
- JWT.
- Bycrpt.
- RegEx.

# Getting Started


## Choose:

You can test the endpoints with the deployed app URL (https://guarded-scrubland-93096.herokuapp.com) or download the code, open it on vsCode and run in terminal:
 
  > $ npm init -y 
  > $ npm i express mongoose bcrypt

## Important

You will need to use Postman to make all the server petitions since we haven't a frontend yet.
Below there is a list of the endpoints you can reach:


# Users: 

- POST /user/register ➡ A new user is registered
- POST /user/login ➡ User logs into his account.
- POST /user/logout ➡ User exits his acccount.

- GET /users ➡ Show all users.
- GET /users/:id ➡ Search a user by his id.
- GET /users/email/:email - Search a user by his email

- PUT /users/:id ➡ Modify info of a user

- DELETE /users/:id ➡ Delete a client by his id.
- DELETE /users/email/:email ➡ Delete a client by his id.

# Appointments: 

- GET /appointments/show ➡ All appointments are shown.

- POST /appointments/create ➡ User can make a new appointment.

- DELETE /appointments/cancel/:id ➡ User can cancel an appointment previously made.
