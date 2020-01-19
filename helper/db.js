const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://ayberk:XZ2XqtItf3aAuwus@mongodb01-r6ymg.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true});
  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
    mongoose.connection.on('error', () => {
        console.log('MongoDB: Error');
    });

    mongoose. Promise = global.Promise;
};