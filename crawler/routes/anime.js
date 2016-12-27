"use strict";
var express = require('express');
var fuzzy = require('fuzzy');
var router = express.Router();
var animelist = [];
var animeMap = {};
var crawler = require('../crawler');
crawler.getAll(false).then(anime => {
    animelist = anime;
    animelist.forEach((anime, index) => {
        animeMap[anime.id] = index;
    });
})


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var start = 0, length = animelist.length > 40 ? 40 : animelist.length;
    if (req.query.start) {
        start = req.query.start;
    }
    if (req.query.length) {
        length = req.query.length;
    }
    res.json(animelist.slice(start, length));
});

function getAnime(id) {
    return animelist[animeMap[id]];
}

router.get('/:id', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(getAnime(req.params.id));
    }
);

router.get('/load/:id', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({
            "720": [{
                "title": "(Hi10)_Accel_World_-_01_(BD_720p)_(FFF)_(850075B9).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_01_(BD_720p)_(FFF)_(850075B9).mkv",
                "id": 0
            }, {
                "title": "(Hi10)_Accel_World_-_02_(BD_720p)_(FFF)_(01F8A933).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_02_(BD_720p)_(FFF)_(01F8A933).mkv",
                "id": 1
            }, {
                "title": "(Hi10)_Accel_World_-_03_(BD_720p)_(FFF)_(EAE5B933).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_03_(BD_720p)_(FFF)_(EAE5B933).mkv",
                "id": 2
            }, {
                "title": "(Hi10)_Accel_World_-_04_(BD_720p)_(FFF)_(7D7E9319).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_04_(BD_720p)_(FFF)_(7D7E9319).mkv",
                "id": 3
            }, {
                "title": "(Hi10)_Accel_World_-_05_(BD_720p)_(FFF)_(E873B1CD).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_05_(BD_720p)_(FFF)_(E873B1CD).mkv",
                "id": 4
            }, {
                "title": "(Hi10)_Accel_World_-_06_(BD_720p)_(FFF)_(3D19E26A).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_06_(BD_720p)_(FFF)_(3D19E26A).mkv",
                "id": 5
            }, {
                "title": "(Hi10)_Accel_World_-_07_(BD_720p)_(FFF)_(B973A8E8).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_07_(BD_720p)_(FFF)_(B973A8E8).mkv",
                "id": 6
            }, {
                "title": "(Hi10)_Accel_World_-_08_(BD_720p)_(FFF)_(8BAFA597).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_08_(BD_720p)_(FFF)_(8BAFA597).mkv",
                "id": 7
            }, {
                "title": "(Hi10)_Accel_World_-_09_(BD_720p)_(FFF)_(0C78B315).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_09_(BD_720p)_(FFF)_(0C78B315).mkv",
                "id": 8
            }, {
                "title": "(Hi10)_Accel_World_-_10_(BD_720p)_(FFF)_(F5EE80F4).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_10_(BD_720p)_(FFF)_(F5EE80F4).mkv",
                "id": 9
            }, {
                "title": "(Hi10)_Accel_World_-_11_(BD_720p)_(FFF)_(645749EC).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_11_(BD_720p)_(FFF)_(645749EC).mkv",
                "id": 10
            }, {
                "title": "(Hi10)_Accel_World_-_12_(BD_720p)_(FFF)_(8FACBF7B).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_12_(BD_720p)_(FFF)_(8FACBF7B).mkv",
                "id": 11
            }, {
                "title": "(Hi10)_Accel_World_-_13_(BD_720p)_(FFF)_(C293A7B2).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_13_(BD_720p)_(FFF)_(C293A7B2).mkv",
                "id": 12
            }, {
                "title": "(Hi10)_Accel_World_-_14_(BD_720p)_(FFF)_(86B953C7).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_14_(BD_720p)_(FFF)_(86B953C7).mkv",
                "id": 13
            }, {
                "title": "(Hi10)_Accel_World_-_15_(BD_720p)_(FFF)_(3B862C6D).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_15_(BD_720p)_(FFF)_(3B862C6D).mkv",
                "id": 14
            }, {
                "title": "(Hi10)_Accel_World_-_16_(BD_720p)_(FFF)_(88D8113B).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_16_(BD_720p)_(FFF)_(88D8113B).mkv",
                "id": 15
            }, {
                "title": "(Hi10)_Accel_World_-_17_(BD_720p)_(FFF)_(AFF50BF6).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_17_(BD_720p)_(FFF)_(AFF50BF6).mkv",
                "id": 16
            }, {
                "title": "(Hi10)_Accel_World_-_18_(BD_720p)_(FFF)_(60F46B1F).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_18_(BD_720p)_(FFF)_(60F46B1F).mkv",
                "id": 17
            }, {
                "title": "(Hi10)_Accel_World_-_19_(BD_720p)_(FFF)_(E21E6A92).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_19_(BD_720p)_(FFF)_(E21E6A92).mkv",
                "id": 18
            }, {
                "title": "(Hi10)_Accel_World_-_20_(BD_720p)_(FFF)_(AF72D98C).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_20_(BD_720p)_(FFF)_(AF72D98C).mkv",
                "id": 19
            }, {
                "title": "(Hi10)_Accel_World_-_21_(BD_720p)_(FFF)_(DB661585).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_21_(BD_720p)_(FFF)_(DB661585).mkv",
                "id": 20
            }, {
                "title": "(Hi10)_Accel_World_-_22_(BD_720p)_(FFF)_(E1D2428C).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_22_(BD_720p)_(FFF)_(E1D2428C).mkv",
                "id": 21
            }, {
                "title": "(Hi10)_Accel_World_-_23_(BD_720p)_(FFF)_(029005C5).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_23_(BD_720p)_(FFF)_(029005C5).mkv",
                "id": 22
            }, {
                "title": "(Hi10)_Accel_World_-_24_(BD_720p)_(FFF)_(9C835A7B).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_24_(BD_720p)_(FFF)_(9C835A7B).mkv",
                "id": 23
            }, {
                "title": "(Hi10)_Accel_World_-_ED2_(BD_720p)_(FFF)_(5270EB36).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_ED2_(BD_720p)_(FFF)_(5270EB36).mkv",
                "id": 24
            }, {
                "title": "(Hi10)_Accel_World_-_ED_(BD_720p)_(FFF)_(6014C406).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_ED_(BD_720p)_(FFF)_(6014C406).mkv",
                "id": 25
            }, {
                "title": "(Hi10)_Accel_World_-_EX01_(BD_720p)_(UTW).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_EX01_(BD_720p)_(UTW).mkv",
                "id": 26
            }, {
                "title": "(Hi10)_Accel_World_-_EX02_(BD_720p)_(UTW).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_EX02_(BD_720p)_(UTW).mkv",
                "id": 27
            }, {
                "title": "(Hi10)_Accel_World_-_OP2_(BD_720p)_(FFF)_(BE94EF65).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_OP2_(BD_720p)_(FFF)_(BE94EF65).mkv",
                "id": 28
            }, {
                "title": "(Hi10)_Accel_World_-_OP_(BD_720p)_(FFF)_(F51A4802).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_OP_(BD_720p)_(FFF)_(F51A4802).mkv",
                "id": 29
            }, {
                "title": "(Hi10)_Accel_World_-_SP01_(BD_720p)_(FFF)_(0673337C).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP01_(BD_720p)_(FFF)_(0673337C).mkv",
                "id": 30
            }, {
                "title": "(Hi10)_Accel_World_-_SP02_(BD_720p)_(FFF)_(10ED8158).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP02_(BD_720p)_(FFF)_(10ED8158).mkv",
                "id": 31
            }, {
                "title": "(Hi10)_Accel_World_-_SP03_(BD_720p)_(FFF)_(D8FAA6C1).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP03_(BD_720p)_(FFF)_(D8FAA6C1).mkv",
                "id": 32
            }, {
                "title": "(Hi10)_Accel_World_-_SP04_(BD_720p)_(FFF)_(76A93AF6).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP04_(BD_720p)_(FFF)_(76A93AF6).mkv",
                "id": 33
            }, {
                "title": "(Hi10)_Accel_World_-_SP05_(BD_720p)_(FFF)_(B8880DA2).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP05_(BD_720p)_(FFF)_(B8880DA2).mkv",
                "id": 34
            }, {
                "title": "(Hi10)_Accel_World_-_SP06_(BD_720p)_(FFF)_(4F8057F8).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP06_(BD_720p)_(FFF)_(4F8057F8).mkv",
                "id": 35
            }, {
                "title": "(Hi10)_Accel_World_-_SP07_(BD_720p)_(FFF)_(D5D39974).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP07_(BD_720p)_(FFF)_(D5D39974).mkv",
                "id": 36
            }, {
                "title": "(Hi10)_Accel_World_-_SP08_(BD_720p)_(FFF)_(F173F1F2).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime6/noihara/[Hi10]_Accel_World_[BD_720p]/(Hi10)_Accel_World_-_SP08_(BD_720p)_(FFF)_(F173F1F2).mkv",
                "id": 37
            }],
            "1080": [{
                "title": "(Hi10)_Accel_World_-_01_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_01_(BD_1080p)_(FFF).mkv",
                "id": 0
            }, {
                "title": "(Hi10)_Accel_World_-_02_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_02_(BD_1080p)_(FFF).mkv",
                "id": 1
            }, {
                "title": "(Hi10)_Accel_World_-_03_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_03_(BD_1080p)_(FFF).mkv",
                "id": 2
            }, {
                "title": "(Hi10)_Accel_World_-_04_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_04_(BD_1080p)_(FFF).mkv",
                "id": 3
            }, {
                "title": "(Hi10)_Accel_World_-_05_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_05_(BD_1080p)_(FFF).mkv",
                "id": 4
            }, {
                "title": "(Hi10)_Accel_World_-_06_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_06_(BD_1080p)_(FFF).mkv",
                "id": 5
            }, {
                "title": "(Hi10)_Accel_World_-_07_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_07_(BD_1080p)_(FFF).mkv",
                "id": 6
            }, {
                "title": "(Hi10)_Accel_World_-_08_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_08_(BD_1080p)_(FFF).mkv",
                "id": 7
            }, {
                "title": "(Hi10)_Accel_World_-_09_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_09_(BD_1080p)_(FFF).mkv",
                "id": 8
            }, {
                "title": "(Hi10)_Accel_World_-_10_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_10_(BD_1080p)_(FFF).mkv",
                "id": 9
            }, {
                "title": "(Hi10)_Accel_World_-_11_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_11_(BD_1080p)_(FFF).mkv",
                "id": 10
            }, {
                "title": "(Hi10)_Accel_World_-_12_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_12_(BD_1080p)_(FFF).mkv",
                "id": 11
            }, {
                "title": "(Hi10)_Accel_World_-_13_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_13_(BD_1080p)_(FFF).mkv",
                "id": 12
            }, {
                "title": "(Hi10)_Accel_World_-_14_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_14_(BD_1080p)_(FFF).mkv",
                "id": 13
            }, {
                "title": "(Hi10)_Accel_World_-_15_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_15_(BD_1080p)_(FFF).mkv",
                "id": 14
            }, {
                "title": "(Hi10)_Accel_World_-_16_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_16_(BD_1080p)_(FFF).mkv",
                "id": 15
            }, {
                "title": "(Hi10)_Accel_World_-_17_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_17_(BD_1080p)_(FFF).mkv",
                "id": 16
            }, {
                "title": "(Hi10)_Accel_World_-_18_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_18_(BD_1080p)_(FFF).mkv",
                "id": 17
            }, {
                "title": "(Hi10)_Accel_World_-_19_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_19_(BD_1080p)_(FFF).mkv",
                "id": 18
            }, {
                "title": "(Hi10)_Accel_World_-_20_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_20_(BD_1080p)_(FFF).mkv",
                "id": 19
            }, {
                "title": "(Hi10)_Accel_World_-_21_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_21_(BD_1080p)_(FFF).mkv",
                "id": 20
            }, {
                "title": "(Hi10)_Accel_World_-_22_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_22_(BD_1080p)_(FFF).mkv",
                "id": 21
            }, {
                "title": "(Hi10)_Accel_World_-_23_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_23_(BD_1080p)_(FFF).mkv",
                "id": 22
            }, {
                "title": "(Hi10)_Accel_World_-_24_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_24_(BD_1080p)_(FFF).mkv",
                "id": 23
            }, {
                "title": "(Hi10)_Accel_World_-_ED2_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_ED2_(BD_1080p)_(FFF).mkv",
                "id": 24
            }, {
                "title": "(Hi10)_Accel_World_-_ED1_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_ED1_(BD_1080p)_(FFF).mkv",
                "id": 25
            }, {
                "title": "(Hi10)_Accel_World_-_EX01_(BD_1080p)_(UTW).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_EX01_(BD_1080p)_(UTW).mkv",
                "id": 26
            }, {
                "title": "(Hi10)_Accel_World_-_EX02_(BD_1080p)_(UTW).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_EX02_(BD_1080p)_(UTW).mkv",
                "id": 27
            }, {
                "title": "(Hi10)_Accel_World_-_EXOP2_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_EXOP2_(BD_1080p)_(FFF).mkv",
                "id": 28
            }, {
                "title": "(Hi10)_Accel_World_-_EXOP1_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_EXOP1_(BD_1080p)_(FFF).mkv",
                "id": 29
            }, {
                "title": "(Hi10)_Accel_World_-_OP2_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_OP2_(BD_1080p)_(FFF).mkv",
                "id": 30
            }, {
                "title": "(Hi10)_Accel_World_-_OP1_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_OP1_(BD_1080p)_(FFF).mkv",
                "id": 31
            }, {
                "title": "(Hi10)_Accel_World_-_SP01_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP01_(BD_1080p)_(FFF).mkv",
                "id": 32
            }, {
                "title": "(Hi10)_Accel_World_-_SP02_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP02_(BD_1080p)_(FFF).mkv",
                "id": 33
            }, {
                "title": "(Hi10)_Accel_World_-_SP03_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP03_(BD_1080p)_(FFF).mkv",
                "id": 34
            }, {
                "title": "(Hi10)_Accel_World_-_SP04_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP04_(BD_1080p)_(FFF).mkv",
                "id": 35
            }, {
                "title": "(Hi10)_Accel_World_-_SP05_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP05_(BD_1080p)_(FFF).mkv",
                "id": 36
            }, {
                "title": "(Hi10)_Accel_World_-_SP06_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP06_(BD_1080p)_(FFF).mkv",
                "id": 37
            }, {
                "title": "(Hi10)_Accel_World_-_SP07_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP07_(BD_1080p)_(FFF).mkv",
                "id": 38
            }, {
                "title": "(Hi10)_Accel_World_-_SP08_(BD_1080p)_(FFF).mkv",
                "link": "http://bc.vc/38388/http://hi10anime.uni.cx/hi10anime4/deathgriper/[Hi10]_Accel_World_[BD_1080p]/(Hi10)_Accel_World_-_SP08_(BD_1080p)_(FFF).mkv",
                "id": 39
            }],
            "others": []
        });
        // res.json({"720":["http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_01_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_02_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_03_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_04_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_05_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_06_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_07_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_08_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_09_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_10_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_11_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_12_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_13_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_14_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_15_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_16_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_17_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_18_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_19_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_20_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_21_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_22_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_23_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_24_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_25_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_ED2_(BD_720p)_(Shiro).mkv","http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_ED_(BD_720p)_(Shiro).mkv"],"1080":["http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_01_(BD_1080p)_(UTW)_(CAD808A9).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_02_(BD_1080p)_(UTW)_(EFCB7287).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_03_(BD_1080p)_(UTW)_(700138C9).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_04_(BD_1080p)_(UTW)_(BCBE82D6).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_05_(BD_1080p)_(UTW)_(D8DB718E).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_06_(BD_1080p)_(UTW)_(E35B42F6).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_07_(BD_1080p)_(UTW)_(95B4170B).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_08_(BD_1080p)_(UTW)_(AE8A6CA0).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_09_(BD_1080p)_(UTW)_(0DDEF8F8).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_10_(BD_1080p)_(UTW)_(39EDC9CF).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_11_(BD_1080p)_(UTW)_(78F0D240).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_12_(BD_1080p)_(UTW)_(D51F0288).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_13_(BD_1080p)_(UTW)_(550061EA).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_14_(BD_1080p)_(UTW)_(6E5BBC54).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_15_(BD_1080p)_(UTW)_(0E827AB1).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_16_(BD_1080p)_(UTW)_(C9FC8895).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_17_(BD_1080p)_(Airota&DHR-UTW)_(6C81209E).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_18_(BD_1080p)_(Airota&DHR-UTW)_(E71DBBCF).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_19_(BD_1080p)_(Airota&DHR-UTW)_(72149BE4).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_20_(BD_1080p)_(Airota&DHR-UTW)_(E2F316EF).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_21_(BD_1080p)_(Airota&DHR-UTW)_(3E61526F).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_22_(BD_1080p)_(Airota&DHR-UTW)_(ED7F244A).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_23_(BD_1080p)_(Airota&DHR-UTW)_(BE4FC7DB).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_24_(BD_1080p)_(Airota&DHR-UTW)_(C539DF35).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_25_(BD_1080p)_(Airota&DHR-UTW)_(38A164FF).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_ED_01_(BD_1080p)_(UTW)_(B80FF00C).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_ED_02_(BD_1080p)_(Airota&DHR-UTW)_(2D24E8CF).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_NCED_01_(BD_1080p)_(UTW)_(C79B68F1).mkv","http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_NCED_02_(BD_1080p)_(=^_^=)_(A00BCD33).mkv"],"others":[]});
// res.json({"720":[{"title":0,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_01_(BD_720p)_(Shiro).mkv"},{"title":1,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_02_(BD_720p)_(Shiro).mkv"},{"title":2,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_03_(BD_720p)_(Shiro).mkv"},{"title":3,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_04_(BD_720p)_(Shiro).mkv"},{"title":4,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_05_(BD_720p)_(Shiro).mkv"},{"title":5,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_06_(BD_720p)_(Shiro).mkv"},{"title":6,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_07_(BD_720p)_(Shiro).mkv"},{"title":7,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_08_(BD_720p)_(Shiro).mkv"},{"title":8,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_09_(BD_720p)_(Shiro).mkv"},{"title":9,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_10_(BD_720p)_(Shiro).mkv"},{"title":10,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_11_(BD_720p)_(Shiro).mkv"},{"title":11,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_12_(BD_720p)_(Shiro).mkv"},{"title":12,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_13_(BD_720p)_(Shiro).mkv"},{"title":13,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_14_(BD_720p)_(Shiro).mkv"},{"title":14,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_15_(BD_720p)_(Shiro).mkv"},{"title":15,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_16_(BD_720p)_(Shiro).mkv"},{"title":16,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_17_(BD_720p)_(Shiro).mkv"},{"title":17,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_18_(BD_720p)_(Shiro).mkv"},{"title":18,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_19_(BD_720p)_(Shiro).mkv"},{"title":19,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_20_(BD_720p)_(Shiro).mkv"},{"title":20,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_21_(BD_720p)_(Shiro).mkv"},{"title":21,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_22_(BD_720p)_(Shiro).mkv"},{"title":22,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_23_(BD_720p)_(Shiro).mkv"},{"title":23,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_24_(BD_720p)_(Shiro).mkv"},{"title":24,"link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_25_(BD_720p)_(Shiro).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_ED2_(BD_720p)_(Shiro).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.uni.cx/kazz/[Hi10]_Shinsekai_Yori_[BD_720p]/(Hi10)_From_the_New_World_-_ED_(BD_720p)_(Shiro).mkv"}],"1080":[{"title":0,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_01_(BD_1080p)_(UTW)_(CAD808A9).mkv"},{"title":1,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_02_(BD_1080p)_(UTW)_(EFCB7287).mkv"},{"title":2,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_03_(BD_1080p)_(UTW)_(700138C9).mkv"},{"title":3,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_04_(BD_1080p)_(UTW)_(BCBE82D6).mkv"},{"title":4,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_05_(BD_1080p)_(UTW)_(D8DB718E).mkv"},{"title":5,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_06_(BD_1080p)_(UTW)_(E35B42F6).mkv"},{"title":6,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_07_(BD_1080p)_(UTW)_(95B4170B).mkv"},{"title":7,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_08_(BD_1080p)_(UTW)_(AE8A6CA0).mkv"},{"title":8,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_09_(BD_1080p)_(UTW)_(0DDEF8F8).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_10_(BD_1080p)_(UTW)_(39EDC9CF).mkv"},{"title":10,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_11_(BD_1080p)_(UTW)_(78F0D240).mkv"},{"title":11,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_12_(BD_1080p)_(UTW)_(D51F0288).mkv"},{"title":12,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_13_(BD_1080p)_(UTW)_(550061EA).mkv"},{"title":13,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_14_(BD_1080p)_(UTW)_(6E5BBC54).mkv"},{"title":14,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_15_(BD_1080p)_(UTW)_(0E827AB1).mkv"},{"title":15,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_16_(BD_1080p)_(UTW)_(C9FC8895).mkv"},{"title":16,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_17_(BD_1080p)_(Airota&DHR-UTW)_(6C81209E).mkv"},{"title":17,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_18_(BD_1080p)_(Airota&DHR-UTW)_(E71DBBCF).mkv"},{"title":18,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_19_(BD_1080p)_(Airota&DHR-UTW)_(72149BE4).mkv"},{"title":19,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_20_(BD_1080p)_(Airota&DHR-UTW)_(E2F316EF).mkv"},{"title":20,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_21_(BD_1080p)_(Airota&DHR-UTW)_(3E61526F).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_22_(BD_1080p)_(Airota&DHR-UTW)_(ED7F244A).mkv"},{"title":22,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_23_(BD_1080p)_(Airota&DHR-UTW)_(BE4FC7DB).mkv"},{"title":23,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_24_(BD_1080p)_(Airota&DHR-UTW)_(C539DF35).mkv"},{"title":24,"link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_25_(BD_1080p)_(Airota&DHR-UTW)_(38A164FF).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_ED_01_(BD_1080p)_(UTW)_(B80FF00C).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_ED_02_(BD_1080p)_(Airota&DHR-UTW)_(2D24E8CF).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_NCED_01_(BD_1080p)_(UTW)_(C79B68F1).mkv"},{"title":"Ending x","link":"http://adf.ly/4400856/http://hi10anime.mooo.com/aborwx/Shows/[Hi10]_Shinsekai_Yori_[BD_1080p]/(Hi10)_Shinsekai_Yori_-_NCED_02_(BD_1080p)_(=^_^=)_(A00BCD33).mkv"}],"others":[]});
        //
        // crawler.get(getAnime(req.params.id).link).then((result) => {
        //     res.json(result);
        // }).catch(function (err) {
        //     res.status(500).send(err.message);
        // });
        //.catch(res.status(500).send.bind(res));

    }
);

router.post('/search', function (req, res, next) {
    var query = req.body.query;
    var useFuzzy = req.body.fuzzy | false;
    var options = {
        extract: function (el) {
            return el.title;
        }
    };
    var results;
    if (useFuzzy) {
        results = fuzzy.filter(query, animelist, options).map(el => el.original);
    } else {
        results = animelist.filter(anime => anime.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.json(results);//);
});

router.post('/download', (req, res, next) => {
    console.log(req.body.json);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.json('ok');
});

router.options('/search', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
router.options('/download', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

module.exports = router;
