const mongoose = require('mongoose')

//trasaction id
//transaction date
const FinanceSchema = new mongoose.Schema({
    customerid: {
        type: String,
        unique:true
    },
    saleid: {
        type: String,
        unique:true
    },
    commission: {
        type: Number,
    },
    referalcommision: {
        type: Number 
    },
    transactiondate: {
        type: Date,
    },
     transactionid: {
    type: String,
     },
    //receivable(or)open, reviewed, approved, To be Invoiced
    financestatus: {
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

const FinanceSchemaDetails = mongoose.model('FinanceDetails', FinanceSchema)

module.exports = FinanceSchemaDetails
