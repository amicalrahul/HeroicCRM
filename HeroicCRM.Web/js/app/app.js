
global.jQuery = require('jquery');
require('bootstrap');
require('angular');
require('angular-animate');
require('angular-ui-bootstrap/ui-bootstrap');
require('angular-ui-grid/ui-grid');

require('bootstrap/dist/css/bootstrap.css');
//require('bootstrap-rtl/dist/css/bootstrap-rtl.css');
require('../../font-awesome/css/font-awesome.css');
require('angular-ui-grid/ui-grid.css');
require('../../css/layout.css');
require('../../css/sb-admin.css');
require('../../css/sb-admin-rtl.css');
const ngModule = angular.module('HeroicCRM', ['ngAnimate', 'ui.bootstrap', 'ui.grid']);

require('./authentication')(ngModule);
require('./customer')(ngModule);
require('./opportunity')(ngModule);
require('./profile')(ngModule);
require('./report')(ngModule);
require('./risk')(ngModule);
require('./utility')(ngModule);
