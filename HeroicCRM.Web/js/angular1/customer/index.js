module.exports = function (ngModule) {
    require('./AddCustomerDirective')(ngModule);
    require('./CustomerDetailsDirective')(ngModule);
    require('./CustomerListController')(ngModule);
    require('./customerSvc')(ngModule);
    require('./EditCustomerDirective')(ngModule);
}