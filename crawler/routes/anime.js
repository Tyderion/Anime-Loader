"use strict";
var express = require('express');
var fuzzy = require('fuzzy');
var router = express.Router();
var animelist = [];
var animeMap = {};
var crawler = require('../crawler');
var fs = require('fs');
var CrawljobDirectory = "/volume1/Downloads/anime-crawls";
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
});

function writeCrawlJob(title, links) {

    let texts = links.map(link => `
text=${link}
packageName=${title}
enabled=TRUE
autoConfirm=TRUE
autoStart=TRUE`);

    let fulLText = texts.join('\n\n');
    console.log(fulLText);
    let file = CrawljobDirectory + "/" + (new Date()).toISOString().replace(/:|\./g, '_') + ".crawljob";
    console.log(file);
    fs.writeFile(
        file,
        fulLText, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('success');
            }
        });

}

router.post('/download', (req, res, next) => {
    let anime = getAnime(req.body.id);
    let links = req.body.links.map(item => item.link);
    writeCrawlJob(anime.title.replace(/[^\x00-\x7F]/g, ""), links);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.json(links);
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
