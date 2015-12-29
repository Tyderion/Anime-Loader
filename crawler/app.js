"use strict";
require('./crawler')(false).then(anime => {
    console.log(anime);
})