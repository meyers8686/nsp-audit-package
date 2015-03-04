#!/usr/bin/env node

var path = require('path');

var audit = require('..');

var loc = process.argv.length > 2 ? process.argv[2] : process.cwd();

var pkgFile = path.extname(loc) === '.json' ?
                loc : path.join(module, 'package.json');

audit(pkgFile, then);

function then() {
    console.log(arguments);
}
