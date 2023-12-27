const mongoose = require('mongoose')
const SalesModel = new mongoose.Schema({
    saleid: {
        type: String,
        unique:true
    },
    customerid:{
        type: String,
    },
    policyid:{
        type: String,
    },
    opportunityid: {
        type: String,
        unique:true
    },
    saledate: {
        type: Date,
    },
    salespersonname: {
        type: String,
    },
    CreatedPersonID: { 
        type:String, 
        default: ""
     },
    CreatedDate:{
        type: Number,
        default: moment(new Date()).unix(),
    },

    UpdatedDate: {
        type: Number,
        default: moment(new Date()).unix(),

    },
    UpdatedPersonID: {
        type: String,
        default: '',

    },

})

const SaleDetails = mongoose.model('SaleDetails', PolicySchema)

module.exports = SaleDetails
