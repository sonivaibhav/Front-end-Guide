angular.module('app').factory('fegIdentity', function(){
    return {
        currentUser: undefined,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
})