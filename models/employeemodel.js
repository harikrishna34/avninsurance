var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RolesSchema = new mongoose.Schema({
    Role: { type: Schema.Types.String, default: '' },
    RoleID: { type: Schema.Types.String, default: '' },
    Status: { type: Schema.Types.String, default: '' },
})
var EmployeeSchema = new mongoose.Schema({
    EmployeeID: { type: Schema.Types.String, default: '' },
    FirstName: { type: Schema.Types.String, default: '' },
    LastName: { type: Schema.Types.String, default: '' },
    DOB: { type: Schema.Types.String, default: '' },
    Age: { type: Schema.Types.String, default: '' },
    ContactNumber: { type: Schema.Types.String, default: '' },
    PrimaryMobileNumber: { type: Schema.Types.String, default: '' },
    Roles: [RolesSchema],
})
var employees = mongoose.model('employeedetails', EmployeeSchema)
module.exports = employees
