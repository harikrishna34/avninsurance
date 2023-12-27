const mongoose = require('mongoose')
const SaleDetails = require('./salesmodel')

const AddressSchema = new mongoose.Schema({
    addressid: { 
        type: String,
        unique: true
    },
    addressline1: { 
        type: String,
        required: true
     },
    addressline2: {
         type: String ,
         default: ""
        },
    city: {
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    state: { 
        type: String,
        required: true
    },
    pincode: {
        type: Number ,
        required: true
    },
    country: { 
        type: String ,
        required: true
    }
})

const TypeofPoliciesSchema = new mongoose.Schema({
    policytypeid: {
        type: String,
        unique:true
    },
    policytype: {
        type: String,
    },

})

const ProviderSchema = new mongoose.Schema({
    providerid: { 
        type: String
     },
    providername:{
        type:String
     },
    provideremail: { 
        type: String
     },    
    providerphonenumber: { 
        type: Number 
    },   
    ContactPerson:{
        type: String
    },
    ContactPersonPhoneNumber:{
        type: String
    },
    ContactPersonEmail:{
        type: String
    },
   // contact person SaleDetails, phone numer, email,type of policies
    addressdetails:[AddressSchema],
    typeofpolicydetails:[TypeofPoliciesSchema]
})


const ProviderDetails = mongoose.model('ProviderDetails', ProviderSchema)

module.exports = ProviderDetails
