const mongoose = require('mongoose')
const interactionDetailsSchema = new mongoose.Schema({

    interactiondateandtime: {
        type: Date,
        default: '',
    },
    interactedperson: {
        type: String,
        default: '',
    },

    remarks: {
        type: String,
        default: '',
    },


})
const InteractionSchema = new mongoose.Schema({
    leadid:{
        type: String,
        default: '',
    },
    opportunityid:{
        type:String
    },
    customerid:{
        type:String
    },
nextoppointmentdateandtime:{
    type:Date,
    default:''
},
CreatedPersonID: { 
    type:String, 
    default: ""
 },
CreatedDate:{
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
interactionDetails:[interactionDetailsSchema]
})
const InteractionModel = mongoose.model('InteractionDetails', InteractionSchema)

module.exports = InteractionModel
