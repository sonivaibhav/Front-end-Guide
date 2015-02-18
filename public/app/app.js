"use strict";
var app = angular.module('app',['ngResource', 'ui.router', 'toaster']);

angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider){
    var routeRoleChecks = {
        admin: {auth: function(fegAuth) {
            return fegAuth.authorizeCurrentUserForRoute('admin')
        }}

    }
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'partials/main/main',
            controller: 'fegMainCtrl'
    })
        .state('user-admin', {
            url: '/admin/users',
            templateUrl: 'partials/admin/user-list',
            controller: 'fegUserListCtrl',
            resolve: routeRoleChecks.admin
    });
    $locationProvider.html5Mode(true);
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if(error === 'not authorized'){
            event.preventDefault();
            $location.path('/');
        }
    })
});



