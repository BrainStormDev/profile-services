const mongoose = require('mongoose')
const Student = require('../models/student')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/profileService';

mongoose.connect( dbUrl ,{
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

studentList = [
      {
            name: 'Abhinav Giri',
            gender: 'male',
            regNo: '20174045',
            email: 'abhinav.cs@gmail.com',
            dob: '1999/03/23'
      },
      {
            name: 'Surya Bhai',
            gender: 'male',
            regNo: '20174003',
            email: 'suryabhai.cs@gmail.com',
            dob: '1999/07/13'
      },
      {
            name: 'Swayam 007',
            gender: 'male',
            regNo: '20175062',
            email: 'swayam.ece@gmail.com',
            dob: '2000/02/20'
      },
      {
            name: 'Hemant Sir',
            gender: 'male',
            regNo: '20154000',
            email: 'hemantsir.cs@walmart.com',
            dob: '1997/01/01'
      }
]

const insertStudentList = () => {
      Student.insertMany( studentList )
      .then( s => {
            console.log(s);
      })
      .catch( err => {
            console.log(err);
      })
}

insertStudentList();