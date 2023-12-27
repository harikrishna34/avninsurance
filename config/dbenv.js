
let ENV;
ENV="Dev"
// ENV="Testing",


let DB_URL;
if(ENV=="Dev"){
  DB_URL='mongodb://localhost:27017/dev_database'
}
exports.DB_URL=DB_URL;
exports.ENV=ENV;
// module.exports = {
//     db: {
//         host: 'localhost',
//         port: 27017,
//         database: 'insurancedetails',
//     },
// }
