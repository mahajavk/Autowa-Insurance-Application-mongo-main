const express = require('express');
const app = express();
const quoteRoute = express.Router();
// InsuranceQuote model
let InsuranceQuote = require('../models/Quote');
let User = require('../models/User');
const userRoute = require('./user.route');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

// Add InsuranceQuote
quoteRoute.route('/create').post((req, res, next) => {
  console.log("createQUOTE")
  InsuranceQuote.create(req.body, (error, data) => {
    console.log("create")
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// userRoute.route('/proceedlogin').get((req, res) => {
// quoteRoute.find(User)(function(err,data){
// if(err) 
// {throw err
// }
// else{
//   console.log(data)
// }

// })


// quoteRoute.route('/proceedlogin').post((req, res, next) => {
//   debugger;
//   //console.log('Coming:123')
//   const {username, password}=req.body;
//   console.log(username)
//   if (username=='admin')
//   {
//     console.log('login is successfull')
//     res.json({ status:'ok', data:'login is succesfull' })
//   }
//   else
//   {
//     console.log('login is invalid')
//     res.json({ status:'not ok', data:'Invalid Credentials' })
//   }

// });


quoteRoute.route('/proceedlogin').post((req, res, next) => {
  try {

    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
  
    const user = User.findOne({ username });
    console.log(user);

    if (user && (bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { username: username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      console.log(user.token);
      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    
    console.log(err);
  }
});

quoteRoute.route('').get((req, res) => {
  InsuranceQuote.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single InsuranceQuote
quoteRoute.route('/read/:id').get((req, res) => {
  InsuranceQuote.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update InsuranceQuote
quoteRoute.route('/update/:id').put((req, res, next) => {
  InsuranceQuote.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete InsuranceQuote
quoteRoute.route('/delete/:id').delete((req, res, next) => {
  InsuranceQuote.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = quoteRoute;