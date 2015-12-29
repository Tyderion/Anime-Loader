"use strict";
var express = require('express');
var router = express.Router();
var animelist = false;
require('../crawler')(false).then(anime => {
    animelist = anime;
})


/* GET users listing. */
router.get('/', function (req, res, next) {
    if (!animelist) {
        res.send('respond with a resource');
    } else {
        res.json(animelist);
    }
});

module.exports = router;
