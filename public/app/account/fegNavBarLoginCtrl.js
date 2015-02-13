angular.module('app').controller('fegNavBarLoginCtrl', function($scope, $http, fegIdentity, toaster){
    $scope.identity = fegIdentity;
    $scope.signin = function(username, password) {
        $http.post('/login', {username: username, password: password}).then(function(response){
            if(response.data.success) {
                toaster.pop('success', "signed in", "You have successfully signed in!");
                fegIdentity.currentUser = response.data.user;
//                fegNotifier.notify('You have successfully signed in!');
            }else{
//                fegNotifier.notify('Username/Password combination incorrect');
                toaster.pop('error', "signed in failed", "Username/Password combination incorrect");
            }
        })
    }
});