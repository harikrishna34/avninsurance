const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    addressid: { 
        type: String,
        unique: true
    },
    addresstype: { 
        type: String,
       
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
const referalpersonSchema = new mongoose.Schema({

    referralid:{
        type: String,
        unique:true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    emailid: {
        type: String,  
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    referalcommission:{
        String:Number,
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

    referraladdressdetails:[AddressSchema]
})
const ReferalpersondetailsModel = mongoose.model('Referalpersondetails', referalpersonSchema)

module.exports = ReferalpersondetailsModel
//customertype: fields
