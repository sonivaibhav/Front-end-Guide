angular.module('app').factory('fegAuth',['$http', 'fegIdentity', '$q', function($http, fegIdentity, $q) {
    return {
        authenticateUser: function(username, password) {
            var deferred = $q.defer();
            $http.post('/login', {username: username, password: password}).then(function(response){
                if(response.data.success) {
                    fegIdentity.currentUser = response.data.user;
                    deferred.resolve(true);
                }else{
                    deferred.resolve(false);
                }
            });
            return deferred.promise;
        }
    }
}]);