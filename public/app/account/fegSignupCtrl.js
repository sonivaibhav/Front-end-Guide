angular.module('app').controller('fegSignupCtrl', ['$scope', 'fegUser', 'toaster', 'fegAuth', '$location', function($scope, fegUser, toaster, fegAuth, $location) {

    $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        fegAuth.createUser(newUserData).then(function() {
            toaster.pop('success', "signed up", "User account created!");
            $location.path('/');
        }, function(reason) {
            toaster.pop('error', "Error", reason);
            console.log(reason);
        })
    }
}])