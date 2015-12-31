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
        crawler.get(getAnime(req.params.id).link).then((result) => {
            res.json(result);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
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
})

router.options('/search', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

module.exports = router;
