const mongoose = require('mongoose');
const quoteRoute = require('../controller/quote.route');
const Schema = mongoose.Schema;
// Define collection and schema
let Quote = new Schema({
   firstname: {
      type: String
   },
   lastname: {
      type: String
   },
   email: {
      type: String
   },
   phonenumber: {
      type: Number
   },
   regitrationyear: {
      type: String
   },
   vehiclenumber: {
      type: String
   },
   amount: {
      type: Number
   },
}, {
   collection: 'quotes'
})

module.exports = mongoose.model('Quote', Quote)