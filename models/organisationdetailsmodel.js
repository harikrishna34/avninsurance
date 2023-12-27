const mongoose = require('mongoose')

const organisationSchema = new mongoose.Schema({

    organisationid: {
        type: String,
        default: '',
        unique:true
    },
    organisationname: {
        type: String,
        default: '',
        required:true
    },
    organisationaddress: {
        type: String,
        default: '',
    },
    organisationphonenumber: {
        type: String,
        default: '',
        unique:true,
        required:true
    },
    organisationemailid: {
        type: String,
        default: '',
        required:true
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
}
)
    
    const OrganisationModel = mongoose.model('OrganisationDetails',organisationSchema)

module.exports = OrganisationModel
