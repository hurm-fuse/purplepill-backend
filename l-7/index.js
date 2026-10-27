// first npm package
var slugify = require('slugify')

console.log(slugify('some string')); // some-string

// if you prefer something other than '-' as separator
console.log(slugify('some string', '_')); // some_string

// second npm package
var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));