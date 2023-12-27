var mongoose = require('mongoose')
autoIncrement = require('mongoose-auto-increment')
const config = require('../../config/dbenv')
const db = require('../../config/dbenv')
const DB_URL = db.DB_URL
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
autoIncrement.initialize(mongoose.connection)

var EmployeeIDSchema = new mongoose.Schema({
    EmployeeID: Number,
})

EmployeeIDSchema.plugin(autoIncrement.plugin, {
    model: 'EmployeeSequence',
    field: 'EmployeeID',
    startAt: 1,
    incrementBy: 1,
})

var EmployeeIDModel = mongoose.model('EmployeeSequence', EmployeeIDSchema)

module.exports = EmployeeIDModel
