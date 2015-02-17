"use strict";
var app = angular.module('app',['ngResource', 'ui.router', 'toaster']);

angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider){
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
            resolve: {
                auth: function(fegIdentity, $q) {
                    if(fegIdentity.currentUser && fegIdentity.currentUser.roles.indexOf('admin') > -1) {
                        return true;
                    }else {
                        return $q.reject('not authorized');
                    }
                }
            }
    });
    $locationProvider.html5Mode(true);
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$stateChangeError', function(event, current, previous, rejection) {
        if(rejection === 'not authorized'){
            $rootScope.$apply(function(){
                $location.path('/');
            });
        }
    })
});



