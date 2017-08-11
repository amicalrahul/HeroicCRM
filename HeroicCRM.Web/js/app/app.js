
const angular = require('angular');
const ngModule = angular.module('HeroicCRM', ['ngAnimate', 'ui.bootstrap', 'ui.grid']);

require('./authentication')(ngModule);
require('./customer')(ngModule);
require('./opportunity')(ngModule);
require('./profile')(ngModule);
require('./report')(ngModule);
require('./risk')(ngModule);
require('./utility')(ngModule);