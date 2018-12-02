'use strict';

const fs = require('fs');

const dir = fs.readdirSync(__dirname);
const files = dir.filter( f => /[^index].+\.js$/.test(f))

module.exports = files.reduce((obj, f) => { obj[f.replace(/\.js$/, '')] = require(`${__dirname}/${f}`); return obj ;}, {});
