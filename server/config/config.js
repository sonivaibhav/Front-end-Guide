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
        db:'mongodb://vsoni:frontendguide@ds043991.mongolab.com:43991/front-end-guide',
        port: process.env.PORT || 80  
    }
}