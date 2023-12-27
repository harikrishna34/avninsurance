const mongoose = require('mongoose')

const BeneficiarySchema = new mongoose.Schema({
    beneficiaryid: {
        type: String,
        default: null,
    },
    //Self, spouse and other.
    beneficiarytype: {
        type: String,
    },
    firstname: {
        type: String,
        default: '',
    },
    lastname: {
        type: String,
        default: '',
    },
    emailid: {
        type: String,
        default: '',
    },
    alternateEmails: {
        type: [String],
        default: [],
    },
    gender: {
        type: String,
        default: '',
    },
    dateofbirth: {
        type: String,
        default: '',
    },
    phonenumber: {
        type: Number,
        default: '',
    },
    alternatephonenumbers: {
        type: [Number],
        default: [],
    },
})
const AddressSchema = new mongoose.Schema({
    addressid: {
        type: String,
        unique: true,
    },
    addresstype: {
        type: String,
    },
    addressline1: {
        type: String,
        required: true,
    },
    addressline2: {
        type: String,
        default: '',
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
})
const customerSchema = new mongoose.Schema({
    customerid: {
        type: String,
        default: '',
        unique: true,
    },
    leadid: {
        type: String,
        default: null,
    },
    beneficiaryid: {
        type: String,
        default: null,
    },
    organisationid: {
        type: String,
        default: null,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        default: '',
    },
    emailid: {
        type: String,
    },
    alternateEmails: {
        type: [String],
        default: [],
    },

    gender: {
        type: String,
        default: '',
    },
    dateofbirth: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
        unique: true,
    },
    alternatephonenumbers: {
        type: [Number],
        default: [],
    },
    status: {
        type: String,
        default: 'Active',
    },
    //Customer type means either individual or organisation
    customertype: {
        type: String,
        default: 'Individual',
    },
    pannumber: {
        type: String,
        default: '',
    },
    adharnumber: {
        type: String,
        default: '',
    },
    attachments: [
        {
            FileType: { type: String },
            DocumentType: { type: String },
            FilePath: { type: String },
        },
    ],
    CreatedPersonID: {
        type: String,
        default: '',
    },

    CreatedDate: {
        type: Date,
        default: moment(new Date()).unix(),
    },

    UpdatedDate: {
        type: Date,
        default: moment(new Date()).unix(),
    },
    UpdatedPersonID: {
        type: String,
        default: '',
    },
    addressdetails: [AddressSchema],
    beneficiarydetails: [BeneficiarySchema],
})
const CustomerModel = mongoose.model('CustomerDetails', customerSchema)

module.exports = CustomerModel
