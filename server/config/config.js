var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        db: 'mongodb://localhost/feg-db',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db:'mongodb://vsoni:mydailyfitnesstracker@ds041821.mongolab.com:41821/mydailyfitnesstracker',
        port: process.env.PORT || 80
    }
}