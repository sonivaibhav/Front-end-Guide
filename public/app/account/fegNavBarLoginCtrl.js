angular.module('app').controller('fegNavBarLoginCtrl', ['$scope', '$http', 'fegIdentity', 'toaster', 'fegAuth',function($scope, $http, fegIdentity, toaster, fegAuth){
    $scope.identity = fegIdentity;
    $scope.signin = function(username, password) {
        fegAuth.authenticateUser(username, password).then(function(success) {
            if(success){
                toaster.pop('success', "signed in", "You have successfully signed in!");
            }else{
                toaster.pop('error', "signed in failed", "Username/Password combination incorrect");
            }
        });
    }
}]);