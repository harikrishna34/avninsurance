const db = require('./dbenv')
const DBENV = db.ENV
exports.serverResponseCodes = {
    Error: 500,
    Invalid_Parameters: 400,
    Unauthorized: 401,
    Permissions_Denied: 403,
    NoData: 404,
    AlreadyExist: 202,
    Success: 200,
    AcessToken: 440,
}

if (DBENV=="Dev") {
    var INSUEMPLOYEE = 'INSUEMP'
}

exports.INSUEMPLOYEE = INSUEMPLOYEE;
