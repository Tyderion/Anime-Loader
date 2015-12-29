"use strict";
var request = require('./request');
var cheerio = require('cheerio');
var options = {
    method: 'POST',
    url: 'http://hi10anime.com/wp-login.php',
    headers: {
        'cache-control': 'no-cache',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'
    },
    formData: {
        log: 'Archie',
        pwd: 'p4$$word',
        'wp-submit': 'login',
        redirect_to: 'http://hi10anime.com/wp-admin/'
    }
};

var optionsMain = {
    method: 'GET',
    url: 'http://hi10anime.com/projects/all-projects/',
    headers: {
        'cache-control': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'
    }
};

var Database = require('./database');
function setup(loadFromNet) {
    if (loadFromNet) {
        return new Promise((resolve, reject) => {
            request(options).then(function () {
                return request(optionsMain)
            }).then(function (result) {
                var $ = cheerio.load(result.body);
                $('.projectsDiv > ul > li').each((i, ele)=> {
                    let element = $(ele);
                    let text = element.text();
                    let link = $(ele.children[1]).attr("href");
                    var index = Database.put({
                        title: text,
                        link: link
                    });
                    var test = Database.get(index);
                });
                Database.save("data.json");
                resolve(Database.all());
            }).catch(reject);
        });
    } else {
        return new Promise((resolve, reject) => {
            Database.load("data.json", (data) => resolve(data))
        })
    }

}
//


module.exports = setup;