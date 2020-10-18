
    const mongoose = require('mongoose')    
    const MONGOUri = process.env.MONGOUri || "mongodb+srv://antonini-333:juventus21@clusterpablo.6opsi.mongodb.net/clinica_dental?retryWrites=true&w=majority";
    const localURL = "mongodb://localhost:27017/pruebas"
const dbconnect = () =>{
    
    mongoose.connect(MONGOUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify : false
    }).then(() => {
        console.log('CONNECTION TO mBD ESTABLISHED');
    }).catch(error => console.log('Error connecting to the DB' + error));
    
    }
    
    module.exports = dbconnect;

    