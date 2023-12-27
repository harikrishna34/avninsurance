const mongoose = require('mongoose')

const PremiumDetailsSchema = new mongoose.Schema({
    Basepremium: {
      type: Number,
      default: 0,
    },
    Netpremium: {
      type: Number,
      default: 0,
    },
    // Add more subpremiums as needed
  })
const PolicyTypeSchema = new mongoose.Schema({
  policytypeid: {
    type: String,
    },
    tax:{
      type:Number,
    },
    commission: {
      type: String
      },
   effectivestartdate: { 
     type: Date
  },
   effectiveenddate: { 
     type: Date 
 },
    premiumDetails: [PremiumDetailsSchema], 
})

const PolicyTypeDetails = mongoose.model('PolicyTypeDetails', PolicyTypeSchema)

module.exports = PolicyTypeDetails
