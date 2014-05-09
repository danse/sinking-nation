var world = require('./data/world-110m.json');

var topojson = require('topojson');
var l = require('lodash');
var fs = require('fs');

var countries = topojson.feature(world, world.objects.countries).features;
l.chain(countries).pluck('geometry').pluck('type').uniq()
