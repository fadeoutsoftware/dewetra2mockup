'use strict';

moment.locale("it");

// Declare app level module which depends on filters, and services
var dewetraApp = angular.module('dewetra', [
    'ngRoute',
    'dialogService',
    'dewetra.ConstantsService',
    'dewetra.ChartService',
    'dewetra.chartDirective'
]);


dewetraApp.config(function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }
);

dewetraApp.controller("TemplateController" , TemplateController);