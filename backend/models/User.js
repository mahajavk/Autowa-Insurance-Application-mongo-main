const mongoose = require('mongoose');
const userRoute = require('../controller/user.route');
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
   username: {
      type: String
   },
   password: {
      type: String
   },
}, {
   collection: 'users'
})

module.exports = mongoose.model('User', User)