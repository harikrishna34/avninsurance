const mongoose = require('mongoose')
const OpportunitySchema = new mongoose.Schema({
    leadid:{
        type:String
    },
    opportunityid: {
        type: String,
        unique:true
    },
    intrestedpolicytype: {
        type: String,
        required:true
    },
    contacteddate: {
        type: Date,
        required:true
    },
    //Opportunity Identified ,Opportunity in progress, Opportunity Closed and won ,
    opportunitystatus: {
        type: String,
        default:""
    },
    probability: {
        type: String,
        default: '50%',
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

const OpportunityDetails = mongoose.model('OpportunityDetails', OpportunitySchema)

module.exports = OpportunityDetails;
