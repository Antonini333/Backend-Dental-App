const dbconnect = () =>{

    const mongoose = require('mongoose')
    
    const uri = "mongodb+srv://antonini-333:juventus21@clusterpablo.6opsi.mongodb.net/clinica_dental?retryWrites=true&w=majority";
    
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify : false
    }).then(() => {
        console.log('CONNECTION TO mBD ESTABLISHED');
    }).catch(error => console.log('Error connecting to the DB' + error));
    
    }
    
    module.exports = dbconnect;