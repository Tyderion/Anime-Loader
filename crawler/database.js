"use strict";
var fs = require('fs');
function Base() {
    this.database = [];
    return {
        put: (data) => this.database.push(data) - 1,
        get: (index) => this.database[key],
        all: () => this.database,
        save: (filename) => {
            fs.writeFile(filename, JSON.stringify(this.database), (err) => {
                if (err) return console.log(err);
            });
        },
        load: (filename, cb) => fs.readFile(filename, "", (err, data) => {
            this.database = JSON.parse(data);
            cb(this.database);
        })

    }
}
module.exports = new Base();

