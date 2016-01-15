"use strict";
var request = require('./request');
var cheerio = require('cheerio');
var md5 = require('md5');

var username = 'Tyderion',
    password = '1xanimeSecure';

var animelist = (() => {
    var options = baseOptions();
    options.url = 'http://hi10anime.com/projects/all-projects/';
    return options;
})();

function baseOptions() {
    return {
        method: 'GET',
        headers: {
            'cache-control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'
        }
    }
}

function createAnimeRequestOptions(url) {
    var options = baseOptions();
    options.url = url;
    return options;
}

function login(username, password) {
    return request({
        method: 'POST',
        url: 'http://hi10anime.com/wp-login.php',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'
        },
        formData: {
            log: username,
            pwd: password,
            'wp-submit': 'login',
            redirect_to: 'http://hi10anime.com/wp-admin/'
        }
    });
}

var Database = require('./database');
function getAnimelist(loadFromNet) {
    if (loadFromNet) {
        return new Promise((resolve, reject) => {
            login(username, password).then(function () {
                return request(animelist)
            }).then(function (result) {
                var $ = cheerio.load(result.body);
                $('.projectsDiv > ul > li').each((i, ele)=> {
                    let element = $(ele);
                    let text = element.text();
                    let link = $(ele.children[1]).attr("href");
                    var data = text.match('(.*)\\[(.*?)\\]');
                    var index = Database.put({
                        title: data[1],
                        qualities: data[2],
                        link: link,
                        id: md5(data[1])
                    });
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

function getAnime(url) {
    return login(username, password).then(() => {
        return request(createAnimeRequestOptions(url))
    }).then((animepage) => {
        var $ = cheerio.load(animepage.body);
        var links = [];
        $('article').filter((i, ele) => {
            return ele.attribs.class.indexOf('post') !== -1;
        }).each((i, ele)=> {
            $('a', ele).each((i, a) => {
                links.push($(a).attr('href'));
            });
        });

        var qualities = links.filter(link =>
            typeof(link) !== 'undefined' &&
            link.indexOf('http://hi10anime.com/') === -1 &&
            link.indexOf('hi10anime') !== -1 &&
            link.indexOf('mailto') === -1 &&
            link.indexOf('torrent') === -1 &&
            link.indexOf('forum') === -1
        ).reduce((acc, link)=> {
            if (link.indexOf("720p") !== -1) {
                acc[720].push(link);
            } else if (link.indexOf("1080p") !== -1) {
                acc[1080].push(link);
            } else {
                acc.others.push(link);
            }
            return acc;
        }, {
            "720": [],
            "1080": [],
            others: []
        });

        for (var key in qualities) {
            if (qualities.hasOwnProperty(key)) {
                qualities[key] = qualities[key].reduce((results, link) => {
                    if (link.indexOf('adf.ly') !== -1) {
                        results.adf.push(link);
                    } else if (link.indexOf('bc.vc') !== -1) {
                        results.bc.push(link);
                    } else if (link.indexOf('sh.st') !== -1) {
                        results.sh.push(link);
                    } else {
                        results.others.push(link);
                    }
                    return results;
                }, {
                    adf: [],
                    bc: [],
                    sh: [],
                    others: []
                });
                var longest = [];
                if (qualities[key].adf.length > longest.length) {
                    longest = qualities[key].adf;
                }
                if (qualities[key].bc.length > longest.length) {
                    longest = qualities[key].bc;
                }
                if (qualities[key].sh.length > longest.length) {
                    longest = qualities[key].sh;
                }
                if (qualities[key].others.length > longest.length) {
                    longest = qualities[key].others;
                }
                qualities[key] = longest;
                qualities[key] = qualities[key].map((ele, index)=> {
                    return {
                        title: ele.indexOf("ED") !== -1 ? "Ending x" : index,
                        link: ele
                    }
                })
            }
        }


        //links.filter(link =>
        //    typeof(link) !== 'undefined' &&
        //    link.indexOf('http://hi10anime.com/') === -1 &&
        //    link.indexOf('hi10anime') !== -1 &&
        //    link.indexOf('mailto') === -1 &&
        //    link.indexOf('torrent') === -1 &&
        //    link.indexOf('forum') == -1
        //).
        //forEach(link => {
        //    if (link.indexOf('adf.ly') !== -1) {
        //        results.adf.push(link);
        //    } else if (link.indexOf('bc.vc') !== -1) {
        //        results.bc.push(link);
        //    } else if (link.indexOf('sh.st') !== -1) {
        //        results.sh.push(link);
        //    } else {
        //        results.others.push(link);
        //    }
        //})
        return qualities;
        ////TODO: Parse page
        //return 'no links found';
    })
}
//


module.exports = {
    getAll: getAnimelist,
    get: getAnime
};