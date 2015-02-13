"use strict";
var app = angular.module('app',['ngResource', 'ui.router', 'toaster']);

angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'partials/main/main',
            controller: 'fegMainCtrl'
    });
    $locationProvider.html5Mode(true);
});



