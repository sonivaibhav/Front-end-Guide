angular.module('app').factory('fegIdentity', function($window, fegUser){
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = new fegUser();
        angular.extend (currentUser,  $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
});