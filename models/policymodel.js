/** @format */

const mongoose = require('mongoose')
const PolicySchema = new mongoose.Schema({
    customerid: {
        type: String,
    },
    beneficiaryid:{
        type:String
    },
    policyid: {
        type: String,
        unique:true
    },
    policynumber:{
       type:String,
       unique:true
    },
    providerid: {
        type: String,
        required:true
    },
    policytypeid: {
        type: String,
        required:true
    },
    policystartdate: {
        type: Date,
        required:true
    },
    policyenddate: {
        type: Date,
        required:true
    },
    premiumpayfrequency:  {
        type: String,
        required:true
    },
    policystatus: {
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

const PolicyDetails = mongoose.model('PolicyDetails', PolicySchema)

module.exports = PolicyDetails
