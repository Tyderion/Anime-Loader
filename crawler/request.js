var request_orig = require("request").defaults({jar: true});
var Promise = require('bluebird');
module.exports = (options) =>
    new Promise((resolve, reject) =>
        request_orig(options, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    response: response,
                    body: body
                })
            }
        }));