const mongoose = require('mongoose')

const AssignEmployeeSchema = new mongoose.Schema({

    newemployeeid: {
        type: String,
    },
    oldemployeeid: {
        type: String,
    },
    AssignedLead:[]
})
    const AssignEmployeeModel = mongoose.model('AssignEmployeeDetails', AssignEmployeeSchema)


module.exports = AssignEmployeeModel