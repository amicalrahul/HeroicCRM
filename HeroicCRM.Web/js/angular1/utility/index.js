module.exports = function (ngModule) {
    require('./ArrayExtensions');
    require('./FormGroupValidationDirective')(ngModule);
    require('./InputValidationIconsDirective')(ngModule);
    require('./MvcGridDirective')(ngModule);
    require('./ParseDateFilter')(ngModule);
}