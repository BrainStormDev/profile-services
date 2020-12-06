const mongoose = require('mongoose')
const School = require('../models/school')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/profileMS';

mongoose.connect( secret.dbUrl ,{
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
})
      .then(() => {
      console.log('DB CONNECTION OPEN');
})
      .catch( err => {
            console.log('Something went wrong');
            console.log(err);
      });