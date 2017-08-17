module.exports = function (ngModule){
    'use strict';

    ngModule.directive('lostCustomersReport', lostCustomersReport);

	function lostCustomersReport() {
		return {
			scope: true,
			templateUrl:  require('./templates/lostCustomersReport.tmpl.html'),
			controller: controller,
			controllerAs: 'vm'
		}
	}

	controller.$inject = ['$http'];
	function controller($http) {
		var vm = this;

		vm.isLoading = true;

		$http.post('/Report/LostCustomers')
			.success(function (customers) {
				vm.customers = customers;
				vm.isLoading = false;
			});
	}
}