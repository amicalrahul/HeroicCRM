require('../ui-grid');
require('../jquery');
require('../angular');
require('../ui-bootstrap');
require('../bootstrap.min');
require('../angular-animate');

require('../../css/layout.css')

(function () {
	'use strict';

	window.app = angular.module('HeroicCRM', ['ngAnimate', 'ui.bootstrap', 'ui.grid']);
})();