var mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');
const config = require('../config/dbenv');
const db=require('../config/dbenv')
const DB_URL=db.DB_URL
mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
autoIncrement.initialize(mongoose.connection);


var customerIDSchema = new mongoose.Schema({
    CustomerID: Number,
  });
  
  customerIDSchema.plugin(autoIncrement.plugin, {
    model: 'Customersequence',
    field: 'CustomerID',
    startAt: 1,
    incrementBy: 1,
  });
  
  var CustomerIDeModel = mongoose.model('Customersequence', customerIDSchema);
  
  module.exports = CustomerIDeModel;
  