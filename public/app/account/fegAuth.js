angular.module('app').factory('fegAuth',['$http', 'fegIdentity', '$q', 'fegUser',function($http, fegIdentity, $q, fegUser) {
    return {
        authenticateUser: function(username, password) {
            var deferred = $q.defer(); 

            $http.post('/login', {username: username, password: password}).then(function(response){
                if(response.data.success) {
                    var user = new fegUser();
                    angular.extend(user, response.data.user);
                    fegIdentity.currentUser = user;
                    deferred.resolve(true);
                }else{
                    deferred.resolve(false);
                }
            });
            return deferred.promise;
        },
        logoutUser: function() {
            var deferred = $q.defer();
            $http.post('/logout', {logout:true}).then(function() {
                fegIdentity.currentUser = undefined;
                deferred.resolve();
            });
            return deferred.promise;
        }
    }
}]);