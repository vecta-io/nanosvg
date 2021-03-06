#!/usr/bin/env node
'use strict';

var Nano = require('../index'),
    args = require('minimist')(process.argv.slice(2)),
    nano;

if (args._.length < 2) { console.log('Usage: nanosvg [options] input output'); }
else {
    nano = new Nano(args);
    nano.compress(args._[0], args._[1], args);
}