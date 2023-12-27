var mongoose = require('mongoose')
var Schema = mongoose.Schema
var moment = require('moment-timezone')
moment.tz.setDefault('Asia/Kolkata')

var RolesSchema = new mongoose.Schema({
    Role: { type: Schema.Types.String, default: '' },
    RoleID: { type: Schema.Types.String, default: '' },
    Status: { type: Schema.Types.String, default: 'Active' },
})
var ProfilePasswordSchema = new mongoose.Schema({
    Password: { type: Schema.Types.String, default: '' },
    CreatedDate: { type: Schema.Types.Number },
    ExpiryDate: { type: Schema.Types.Number },
    Status: { type: Schema.Types.String, default: 'Active' },
})
var LoginSchema = new mongoose.Schema({
    CreatedDate: {
        type: Schema.Types.Number,
        default: moment(new Date()).unix(),
    },
    MobileNumber: { type: Schema.Types.String, default: '' },
    Name: { type: Schema.Types.String, default: '' },
    UserID: { type: Schema.Types.String, default: '' },
    Password: { type: Schema.Types.String, default: '' },
    Roles: [RolesSchema],
    Status: { type: Schema.Types.String, default: 'Active' },
    UpdatedDate: {
        type: Schema.Types.Number,
        default: moment(new Date()).unix(),
    },
    EmployeeID: { type: Schema.Types.String, default: '' },
})

var login = mongoose.model('loginsmodel', LoginSchema)
module.exports = login
