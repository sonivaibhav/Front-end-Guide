angular.module('app').factory('fegIdentity', function(){
    "use strict";
    return {
        currentUser: undefined,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
})