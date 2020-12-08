if (process.env.NODE_ENV !== "production") {
      require('dotenv').config();
  }

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

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

app.use( methodOverride('_method') );
app.use( express.json() );

app.use( ( req, res ) => {
      res.status(404).json({});
} )

const port = process.env.PORT || 3000
app.listen( port, () => {
      console.log(`APP IS LISTENING ON PORT {port} `)
})