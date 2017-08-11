module.exports = function (ngModule){
    'use strict';

    ngModule.controller('CustomerListController', CustomerListController);

	CustomerListController.$inject = ['$modal', 'customerSvc'];
	function CustomerListController($modal, customerSvc) {
		var vm = this;
		vm.add = add;
		vm.customers = customerSvc.customers;


		function add() {
			$modal.open({
				template: '<add-customer />'
			});
		}
	}
}