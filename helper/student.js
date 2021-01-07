const Student  = require('../models/student');
const callbacks = {};

callbacks.getStudentList = ( req, res ) => {
      // console.log(req.query);
      Student.find(req.query)
      .then( s => {
            res.json(s);
      })
      .catch( err => {
            console.log(err);
            res.status(404).json({message: err.message});
      })
}

callbacks.addStudent = ( req, res ) => {
      const student = new Student( req.body );
      student.save()
      .then( s => {
            res.json(s);
      } )
      .catch( err => {
            console.log(err);
            res.status(404).json({message: err.message});
      })
}

callbacks.updateStudentInfo = ( req, res ) => {
      const { id } = req.query;

      if( !id ){
            res.status(404).json({message: 'id not specified !' });
      }

      Student.findByIdAndUpdate( id, req.body , { new: true })
      .then( s => {
            res.json(s);
      } )
      .catch( err => {
            res.status(404).json({message: err.message});
      })
}

callbacks.deleteStudent = ( req, res ) => {
      const { id } = req.query;

      if( !id ){
            res.status(404).json({message: 'id not specified !' });
      }

      Student.findByIdAndDelete( id )
      .then( s => {
            res.json(s);
      })
      .catch( err => {
            res.status(404).json({message: err.message });
      })
}

module.exports = callbacks;