"use strict";
var express = require('express');
var fuzzy = require('fuzzy');
var router = express.Router();
var animelist = [];
var animeMap = {};
require('../crawler')(false).then(anime => {
    animelist = anime;
    animelist.forEach((anime, index) => {
        animeMap[anime.id] = index;
    });
})


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var start = 0, length = animelist.length > 20 ? 20 : animelist.length;
    if (req.query.start) {
        start = req.query.start;
    }
    if (req.query.length) {
        length = req.query.length;
    }
    res.json(animelist.slice(start, length));
});

router.get('/:id', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(animelist[animeMap[req.params.id]]);
    }
)
;

router.post('/search', function (req, res, next) {
    var query = req.body.query;
    var options = {
        extract: function (el) {
            return el.title;
        }
    };
    var results = animelist.filter(anime => anime.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);//fuzzy.filter(query, animelist, options);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(results);//.map(el => el.original));
})

module.exports = router;
