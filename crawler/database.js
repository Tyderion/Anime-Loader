"use strict";
var fs = require('fs');
function Base(){
    this.database = {};
    return {
        put: (key, data) => this.database[key] = data,
        get: (key) => this.database[key],
        all: () => this.database,
        save: (filename) => {
            fs.writeFile(filename, JSON.stringify(this.database), (err) => {
                if (err) return console.log(err);
            });
        },
        load: (filename) => fs.readFile(filename, "", (err, data) => {
            this.database = data;
        })
    }
}
module.exports = new Base();

