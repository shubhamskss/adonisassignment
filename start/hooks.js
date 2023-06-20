const { hooks } = require('@adonisjs/ignitor');
const mongoose = require('mongoose');
hooks.after.providersBooted(() => {
    mongoose.connect("mongodb+srv://shubhamskss:EG0LdZhg8keV3dA2@cluster0.qhjri.mongodb.net/shubham?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to the database');
    });
  
    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });
  });